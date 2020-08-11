import React, { useState } from 'react';
import { View , Text, ScrollView, TextInput} from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { Feather } from "@expo/vector-icons"

import AsyncStorange from '@react-native-community/async-storage';

import PageHeader from '../../componentes/PageHeader';
import CardProf, { Teacher } from '../../componentes/CardProf';
import api from '../../services/api';

import styles from './styles';




function ListProffy(){
    const [filters , setFilters] = useState(false);

    const [teachers, setTeacher] = useState([]);
    const [favoritos, setFavoritos] = useState<number>('');
    
    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');


    function loadFavoritos(){
        AsyncStorange.getItem('favoritos').then( response => {
            if(response){
                const favoritosOK = JSON.parse(response);
                const favoritoId = favoritosOK.map((teacher: Teacher) => {
                    return teacher.id
                })

                setFavoritos(favoritoId);
            }
        })
    }

    async function searchTeachers(){
        loadFavoritos();
        const resp = await api.get('classes',{
            params:{
                subject,
                week_day,
                time
            }
        })
        setFilters(false);
        setTeacher(resp.data)
    }

    function handlefilter (){
        if(filters){
            setFilters(false)
        }else{
            setFilters(true)
        }
        
    }

    return (
        <View style={styles.container} >
            <PageHeader 
                title="Proffys disponiveis" 
                headerRigth={(
                    <BorderlessButton onPress={handlefilter}>
                        <Feather name="filter" size={20} color="#fff" />
                    </BorderlessButton>
                )} 
            >
                {filters && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>
                            Matérias
                        </Text>
                        <TextInput 
                            style={styles.input}
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholder="Qual a materia?"
                            placeholderTextColor="#c1bccc"

                        />
                        <View style={styles.inputGroup}> 
                            <View style={styles.inputBlock}> 
                                <Text style={styles.label}>
                                    Dia da Semana
                                </Text>
                                <TextInput 
                                    style={styles.input}
                                    value={week_day}
                                    onChangeText={text => setWeek_day(text)}
                                    placeholder="Dia da Semana?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>

                            <View style={styles.inputBlock}> 
                                <Text style={styles.label}>
                                    Horário 
                                </Text>
                                <TextInput 
                                    style={styles.input}
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholder="Qual o horário?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                        </View>
                        <RectButton onPress={searchTeachers} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}> 
                                Filtrar
                            </Text> 
                        </RectButton>
                    </View>
                )}
            </PageHeader>
            
            <ScrollView style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >

                { teachers.map((teacher: Teacher)=> {
                    return <CardProf 
                                key={teacher.id}  
                                teacher={teacher}
                                flagFavoritos={favoritos.includes(teacher.id)}
                            />
                })}
                
            </ScrollView>
            
        </View> 
    )
}

export default ListProffy;

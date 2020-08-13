import React, { useState, useEffect } from 'react';
import { View , ImageBackground, Text, TouchableOpacity, ScrollView} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AsyncStorange from '@react-native-community/async-storage';
import { useFocusEffect } from "@react-navigation/native";

import styles from './styles';
import PageHeader from '../../componentes/PageHeader';
import CardProf, { Teacher } from '../../componentes/CardProf';



function ListFavorites(){
    const [favoritos, setFavoritos] = useState([]);
    
    function loadFavoritos(){
        AsyncStorange.getItem('favoritos').then( response => {
            if(response){
                const favoritosOK = JSON.parse(response);
              

                setFavoritos(favoritosOK);
            }
        });
    }
    
    useFocusEffect(()=>{
        loadFavoritos();
    });



    return (
        <View style={styles.container} >
            <PageHeader title="Meus proffys favoritos"/>

            <ScrollView style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
               
               { favoritos.map((teacher: Teacher)=> {
                    return <CardProf 
                                key={teacher.id}  
                                teacher={teacher}
                                flagFavoritos={true}
                            />
                })}
            </ScrollView>
            

        </View> 
    )
}

export default ListFavorites;

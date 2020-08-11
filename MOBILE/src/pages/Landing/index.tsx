import React, { useState, useEffect } from 'react';
import { View , Image, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';


import landingImg from '../../assest/images/landing.png'
import studyIcons from '../../assest/images/icons/study.png'
import giveClassesIcons from '../../assest/images/icons/give-classes.png'
import heartIcon from '../../assest/images/icons/heart.png'
import styles from './styles';
import api from '../../services/api';


function Landing(){
    const {navigate} = useNavigation();
    
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect( ()=>{
        api.get('connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total);
        })
    } , [totalConnections])




    function handleNavigateToGiveClassesPage(){
        navigate('GiveClasses');
    }
    function handleNavigateToGiveStudyTabsPageS(){
        navigate('StudyTabs');
    }

    return (
    <View style={styles.container}>
        <Image style={styles.banner} source={landingImg}/>

        <Text style={styles.title}> Seja bem-vindo, {'\n'}
            <Text style={styles.titleBold}>
                O que deseja fazer
            </Text>
        </Text>

        <View style={styles.buttonsContainer}>
            <RectButton onPress={handleNavigateToGiveStudyTabsPageS} style={[styles.button, styles.primary]}>
                <Image source={studyIcons}/>
                <Text style={styles.buttonText}> Estudar </Text>
            </RectButton>

            <RectButton 
                onPress={handleNavigateToGiveClassesPage} 
                style={[styles.button, styles.Secondary]}
            >
                <Image source={giveClassesIcons}/>
                <Text style={styles.buttonText}> Dar Aulas </Text>
            </RectButton>
        </View>

        <Text style={styles.totalConnectios}>
            Total de {totalConnections} conexões ja realizadas {" "}
            <Image source={heartIcon}/>
        </Text>

    </View> 
    )
}

export default Landing;
import React from 'react';
import { View , ImageBackground, Text, TouchableOpacity, ScrollView} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import PageHeader from '../../componentes/PageHeader';
import CardProf from '../../componentes/CardProf';



function ListFavorites(){
    
   
    return (
        <View style={styles.container} >
            <PageHeader title="Meus proffys favoritos"/>
            <ScrollView style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <CardProf/>
                <CardProf/>
                <CardProf/>
            </ScrollView>

        </View> 
    )
}

export default ListFavorites;

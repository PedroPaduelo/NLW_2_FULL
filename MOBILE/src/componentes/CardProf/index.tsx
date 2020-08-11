import React, { useState } from 'react';
import { View , Text, Image, Linking} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import AsyncStorange from '@react-native-community/async-storage';

import styles from './styles';

import heartOutlineIcon from '../../assest/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assest/images/icons/unfavorite.png'
import whatsappIcon from '../../assest/images/icons/whatsapp.png'
import api from '../../services/api';

export interface Teacher{
    
        id: number,
        subject: string,
        cost: number,
        name: string,
        avatar: string,
        whatsapp: string,
        bio: string

}

interface TeacherItemProps{
    teacher: Teacher;
    flagFavoritos: boolean;
}
const CardProf: React.FC<TeacherItemProps> = ({teacher, flagFavoritos}) => {
    const [jafavorito , setJafavorito] = useState(flagFavoritos);

    function creatNewConnection (){
        Linking.openURL(`whatsapp://send?text=Hello World!&phone=+55${teacher.whatsapp}"` )
        api.post('connections', {
            user_id: teacher.id,
        })
    }

    async function favoritar (){
        const allFavoritos = await AsyncStorange.getItem('favoritos');
        let allFavoritosArray = [];

        if(allFavoritos){
            allFavoritosArray = JSON.parse(allFavoritos);
        }

        if(jafavorito){
            const favoritoindex = allFavoritosArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id = teacher.id;
            })

            allFavoritosArray.splice(favoritoindex, 1 )
            setJafavorito(false);
        }else{
           

            allFavoritosArray.push(teacher);

            await AsyncStorange.setItem('favoritos', JSON.stringify(allFavoritosArray));
            setJafavorito(true);

        }
        await AsyncStorange.setItem('favoritos', JSON.stringify(allFavoritosArray));
        
    }
    
        
    return (
        <View style={styles.container} >
            <View style={styles.profile} >
                <Image 
                    style={styles.avatar} 
                    source={{uri: teacher.avatar}}
                />
                <View style={styles.profileInfo} >
                    <Text style={styles.name}>
                        {teacher.name}
                    </Text>

                    <Text style={styles.subject}>
                       {teacher.subject}
                    </Text>
                </View>
            </View>
            <Text style={styles.bio}>
                {teacher.bio}
            </Text>
            <View style={styles.footer} >
                <Text style={styles.price}>
                    Preço/hora {"    "} 
                    <Text style={styles.priceValue}>
                        R$ {teacher.cost}
                    </Text>
                </Text>
                
                <View style={styles.buttonsContainer} >
                    <RectButton onPress={favoritar} style={[styles.favoriteButton , jafavorito ? styles.favorited : {} ]}>
                        {jafavorito ? <Image source={unfavoriteIcon} /> : <Image source={heartOutlineIcon} /> }

                        
                    </RectButton>

                    <RectButton onPress={creatNewConnection} style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>
                           Entrar em Contato
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View> 
    )
}

export default CardProf;

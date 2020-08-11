import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons'

import ListProffy from '../pages/ListProffy';
import ListFavorites from '../pages/ListFavorites';

const { Navigator, Screen} = createBottomTabNavigator();


export default  function StudyTabs(){
    return(
       
        <Navigator 
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpaciy:0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: { 
                    fontFamily: "Archivo_700Bold",
                    fontSize: 16,
                    marginLeft: 16,

                },
                inactiveBackgroundColor: "#fafafc",
                activeBackgroundColor: "#ebebf5",
                inactiveTintColor: "#c1bccc",
                activeTintColor: "#32264d"
            }}
        
        
        
        >
            <Screen 
                name="ListProffy" 
                component={ListProffy}
                options={{
                    tabBarLabel: "Proffys",
                    tabBarIcon: ({
                        color, 
                        size,
                        focused
                    }) =>{
                        return (
                            <Ionicons name="ios-easel" size={size} color={focused ? "#8257e5" : color} />
                        )
                    }
                }}
            /> 
            <Screen 
                name="ListFavorites" 
                component={ListFavorites}
                options={{
                    tabBarLabel: "Favorite Proffys",
                    tabBarIcon: ({
                        color, 
                        size,
                        focused
                    }) =>{
                        return (
                            <Ionicons name="ios-heart" size={size} color={focused ? "#8257e5" : color} />
                            
                        )
                    }
                }}
            /> 
        </Navigator>
        
    );
}
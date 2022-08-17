import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import Index from '../screens/Index';
import Index from '../screens/Index';
import LogIn from '../screens/Login';

const MainStack =()=>{

    const Stack = createNativeStackNavigator()
   
    return(
    <Stack.Navigator>

        <Stack.Screen

            options={{headerShown: false, }} 
            name='LogIn'
            component={ LogIn }

        />
        <Stack.Screen

            options={{headerShown: false, }} 
            name='Index'
            component={ Index }

        />
         <Stack.Screen

            options={{headerShown: false, }} 
            name='Platos'
            component={ Platos }

        />
    </Stack.Navigator>


);

}

export default MainStack;

const style = StyleSheet.create({
    buttonContainer:{
        backgroundColor: 'green',
        marginBottom: 10,
        paddingHorizontal:20,
        paddingHorizontal:10,

    },
    buttonText:{
    color:'white'
    }



    })
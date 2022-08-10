import React, { Component, useState } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getVerificacion } from '../../services/menuService';

export default function LogIn() {
    const [userState, setUserState] = useState({
        email: "",
        password:""
    });
    const navigation = useNavigation();
    const onGetPress = async () => {
        if (!userState.email){
            console.log("hhh")
            Alert.alert("Por favor ingresar el id")
        } else {
            getVerificacion(userState)
            .then(()=>{
                navigation.navigate('Inicio')
            })
            .catch((e) => {
                
                Alert.alert("Error")
                });
            }
    }
    return (
      <View style={styles.container}>
        <TextInput
          value={userState.email}
          onChangeText={text => setUserState({...userState, email: text}) }
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={userState.password}
          onChangeText={text => setUserState({...userState, password: text}) }
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={onGetPress}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
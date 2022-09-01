import React, { Component, useState } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getVerificacion } from '../../services/menuService';

export default function LogIn() {
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const navigation = useNavigation();

   
    const onGetPress = async () => {
        if (!email || !password)
        {
          Alert.alert("Complete el campo")
          console.log("No paso")
        }else
        {
          getVerificacion({email, password}).then(()=>{navigation.navigate("Home")})
          .catch(() => {
            Alert.alert("Datos incorrectos")
          });    
        }   
      }

    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={text => onChangeEmail(text)} 
          value={email} 
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          
          onChangeText={text=> onChangePassword(text)}
          value={password} 
          placeholder={'Password'}
          //secureTextEntry={true}
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

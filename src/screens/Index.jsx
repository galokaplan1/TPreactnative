import React, { Component, useState } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Index() {
    
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        
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
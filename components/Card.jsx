import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function ProfesoresList ({profesores}){
   
    return (
    
    <TouchableOpacity>
        
    <View>
        <Text style={styles.lista} >
            {text} - {text} - {text} - {text}
        </Text>
    </View>

    </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    lista: {
        color:'white',
        fontFamily: 'Kanit-Regular',
        borderWidth: 1,
        borderColor: "lightblue",
        padding: 10,
        backgroundColor: "#169DFF",
        marginTop: 15,
        marginBottom: -5,
        width: 350,
    }
});
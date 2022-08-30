import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import axios from 'axios';
import {useEffect}from 'react';

const NombrePlato =({route})=>{

    const [plato, setplato] = useState([]);

useEffect(() => {
    axios
        .get("https://api.spoonacular.com/food/menuItems/" + route.params.id)
        .then((response) => {
          console.log(response.data)
            setplato(response.data);
        });
  }, [])


  return (
<View>   
<Text>{setplato.title} </Text>
</View>
  );
}
export default NombrePlato;
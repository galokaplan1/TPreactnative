import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './src/screens/Login';
import Index from './src/screens/Index';




 
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="LogIn"
      >
        <Stack.Screen name="LogIn" component={LogIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Index" component={Index}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
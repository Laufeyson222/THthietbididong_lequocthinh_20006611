import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './view/Screen1';
import Screen2 from './view/Screen2';
import Screen3 from './view/Screen3';




const Stack= createStackNavigator();
export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown:false}}>
        
       
        <Stack.Screen name='Screen1'  component={Screen1} ></Stack.Screen>
        <Stack.Screen name='Screen2'  component={Screen2} ></Stack.Screen>
        <Stack.Screen name='Screen3'  component={Screen3} ></Stack.Screen>
      
      </Stack.Navigator>
     </NavigationContainer>
  );
}



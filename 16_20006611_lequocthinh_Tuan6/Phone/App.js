import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './src/Screen1';
import Screen2 from './src/Screen2';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator mode='modal'>
          <Stack.Screen options={{headerShown: false}} name = 'Screen1' component = {Screen1}></Stack.Screen>
          <Stack.Screen options={{headerShown: false}} name = 'Screen2' component = {Screen2}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


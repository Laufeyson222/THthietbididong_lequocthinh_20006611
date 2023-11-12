



import Login from './Screen/Login';
import Todo from './Screen/Todo';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name = 'Login' component={Login}></Stack.Screen>
      <Stack.Screen name = 'Todo' component={Todo}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  );
}


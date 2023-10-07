import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,backgroundImage } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text 
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          marginLeft: -250,
          marginTop: 70,
          marginBottom: 50,
        }}
      >LOGIN</Text>
      <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#D8B93B',
              padding: 10,
              margin: 20,
              border: '1px solid White'
      }}>
            <Image
                style={{width: 25, height: 25}}
                source={
                require('./assets/user.png')
            } />
            <input style={{
                border: 'none',
                backgroundColor: '#D8B93B',
                width: 310,
                height: 30,
                marginLeft: 10,
            }}type='text' placeholder='Name' />
      </div>
      <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#D8B93B',
              padding: 10,
              border: '1px solid White'
      }}>
            <Image
                style={{width: 25, height: 25}}
                source={
                require('./assets/lock.png')
            } />
            <input style={{
                border: 'none',
                backgroundColor: '#D8B93B',
                width: 270,
                height: 30,
                marginLeft: 10,
            }} type='text' placeholder='Password' />
            <Image
                style={{width: 30, height: 30, marginRight: 10}}
                source={
                require('./assets/eye.png')
            } />
      </div>

      <input type='submit' value='Login' style={{
          backgroundColor: '#000',
          width: 370,
          height: 40,
          marginTop: 70,
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 20,
      }} />

      <Text style={{
          marginTop: 50,
          fontSize: 20,
          fontWeight: 'bold',
      }}>CREATE ACCOUNT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage:"linear-gradient(#FFE000,#BA8B02,#666600)",
    alignItems: 'center',
    
  },
});
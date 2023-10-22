import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View,Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Array =[ {
  image: require('./assets/a.png'),
  price:10,
  name:'Bike',
  description:'not thing to show',
},{
image: require('./assets/b.png'),
price:10,
name:'Bike',
description:'not thing to show',
},{
image: require('./assets/c.png'),
price:10,
name:'Bike',
description:'not thing to show',
},{
image: require('./assets/d.png'),
price:10,
name:'Bike',
description:'not thing to show',
},{
  image: require('./assets/a.png'),
  price:10,
  name:'Bike',
  description:'not thing to show',
  },{
    image: require('./assets/c.png'),
    price:10,
    name:'Bike',
    description:'not thing to show',
    }
]
function HomeScreen({navigation, route}){
  return(
    <View style={{flex:1,alignItems:'center'}} >
        <View style={{justifyContent:'center',alignItems:'center',marginTop:'60px'}}>
          <Text style={{fontSize:'20px',fontWeight:'700', textAlign:'center' ,Items:'center'}}>A premium online store for sporter and their stylish choice</Text>

        </View>
        <View style={{width:'359px',height:'388px',backgroundColor:'lightpink',justifyContent:'center',alignItems:'center',borderRadius:'10px',marginTop:'20px'}}>

          <Image style={{width:'292px',height:'270px'}} source={require('./assets/a.png')} />
        </View>

        <View>
          <Text style={{fontSize:'25px',fontWeight:'700',textAlign:'center',Items:'center'}}>Power Bike <br/> Shop</Text>
        </View>
        <View style={{width:'340px',height:'61px',backgroundColor:'red',borderRadius:'30px',justifyContent:'center',alignItems:'center'}}>
          <Pressable style={{fontSize:'27px',fontWeight:'500',color:'white'}}
          onPress={() => navigation.navigate('Screen2')}
          
          >
            Get Started
          </Pressable>
        </View>
    </View>

  )
}
function Screen2({navigation, route}){

  return (

    <Pressable onPress={() => navigation.navigate('Screen3')}>
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}} >


      <View style={{height:'80px',}}>

        <Text style={{fontSize:'25px',fontWeight:'700',color:'red'}}>The world's best bike</Text>
      </View>
      <FlatList 
      numColumns={2}
      data={Array}
      renderItem={({item}) => {return (

        
          <View style={{width:'150px',height:'150px',justifyContent:'center',alignItems:'center',margin:'10px',borderRadius:'10px',borderWidth:'1px'}}>
          
          <Image  
          resizeMode='contain'
          source={item.image}
          style={{width:'100px',height:'100px'}}
          />

          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
          </View>
        
      )
      
      }
      
    }
      
      />


    </View>
    </Pressable>
  )
}

function Screen3({navigation, route}){

  return(
    <View style={{flex:1,alignItems:'center'}} >
        
        <View style={{width:'359px',height:'388px',backgroundColor:'lightpink',justifyContent:'center',alignItems:'center',borderRadius:'1px',marginTop:'10px'}}>

          <Image style={{width:'292px',height:'270px'}} source={require('./assets/a.png')} />
        </View>

        <View style={{display:'flex',justifyContent:'flex-start',width:'93%'}}>
          <Text style={{fontSize:'25px',fontWeight:'700',}}>Pina Mountain</Text>
        </View>
        <View style={{display:'flex',justifyContent:'flex-start',width:'93%',flexDirection:'row',gap:'20px'}}>
          <Text style={{fontSize:'20px',fontWeight:'700',color:'gray'}}>15% OFF 1350$</Text>
          <Text style={{fontSize:'20px',fontWeight:'700', textDecorationLine: 'line-through',}}>499$</Text>
        </View>


        <View style={{display:'flex',justifyContent:'flex-start',width:'93%',marginTop:'10px'}}>
          <Text style={{fontSize:'20px',fontWeight:'700'}}>Description</Text>
        </View>

        <View style={{display:'flex',justifyContent:'flex-start',width:'93%',marginTop:'10px'}}>
          <Text style={{fontSize:'20px',fontWeight:'600',color:'gray'}}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
        </View>

          <View style={{display:'flex',justifyContent:'flex-start',width:'93%',flexDirection:'row',gap:'30px'}}>

          <Image style={{width:'35px',height:'35px',marginTop:'10px'}} source={require('./assets/akar-icons_heart.png')} />
        <View style={{width:'269px',height:'54px',backgroundColor:'red',borderRadius:'30px',justifyContent:'center',alignItems:'center'}}>
          <Pressable style={{fontSize:'27px',fontWeight:'500',color:'white'}}
          onPress={() => navigation.navigate('Home')}
          
          >
            Add to cart
          </Pressable>
        </View>
        </View>
    </View>

  )
  }
const Stack= createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown: false}} name = 'Screen2' component = {Screen2}></Stack.Screen>
        <Stack.Screen options={{headerShown: false}} name = 'Screen3' component = {Screen3}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



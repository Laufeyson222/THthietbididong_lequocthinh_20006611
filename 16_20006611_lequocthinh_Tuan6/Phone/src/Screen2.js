import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'



export default function Screen2({navigation, route}) {
 const [image, setImage] = useState(require('../assets/vs_blue.png'));
  return (
    <View style={{flex: 1}}>
        <View style={styles.container1}>
            <Image source={image} style={styles.blueVS}></Image>
            <Text style={styles.title}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
        </View>

        <View style={styles.container2}>
            <Text style={styles.colorText}>Chọn một màu bên dưới:</Text>
            <View style={styles.press}>
                <Pressable style={styles.silverPress}
                    onPress={() => {setImage(require('../assets/vs_silver.png'))}}
                ></Pressable>
                <Pressable style={styles.redPress}
                     onPress={() => {setImage(require('../assets/vs_red.png'))}}    
                ></Pressable>
                <Pressable style={styles.blackPress}
                     onPress={() => {setImage(require('../assets/vs_black.png'))}}
                ></Pressable>
                <Pressable style={styles.bluePress}
                     onPress={() => {setImage(require('../assets/vs_blue.png'))}}
                ></Pressable>
            </View>
            <Pressable style={styles.button}
                onPress={() => navigation.navigate(
                    {
                        name: 'Screen1', params: {image: image}
                    })}
            >Xong</Pressable>
        </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container1: {
        flex: 2,
        marginLeft: 4,
        display: 'flex',
        flexDirection: 'row'
    },
    container2: {
        flex: 7,
        backgroundColor: '#C4C4C4',
    },
    blueVS: {
        width: 112,
        height: 132,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 20,
        fontWeight: 400,
        marginTop: 17,
        marginLeft: 10,
    },
    press: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    silverPress: {
        width: 85,
        height: 80,
        backgroundColor: '#C5F1FB',
        marginTop: 10,
    },
    redPress: {
        width: 85,
        height: 80,
        backgroundColor: '#F30D0D',
        marginTop: 10,
    },
    blackPress: {
        width: 85,
        height: 80,
        backgroundColor: '#000000',
        marginTop: 10,
    },
    bluePress: {
        width: 85,
        height: 80,
        backgroundColor: '#234896',
        marginTop: 10,
    },
    button: {
        marginLeft: 15,
        width: 360,
        height: 44,
        borderRadius: 10,
        backgroundImage: 'linear-gradient(0deg, rgba(25, 82, 226, 0.58), rgba(25, 82, 226, 0.58))',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 700,
        color: '#F9F2F2',
        marginTop: 34,
    },
    colorText: {
        marginLeft: 17,
        marginTop: 10,
        fontSize: 18,
        fontWeight: 400
    }
})
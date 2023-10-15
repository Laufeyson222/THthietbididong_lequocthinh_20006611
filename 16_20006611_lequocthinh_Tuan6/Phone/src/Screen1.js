import { StyleSheet, Text, View, Image, Pressable, backgroundImage } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

export default function Screen1({navigation, route}) {
  return (
    <View style={styles.container}>
        <Image source={route.params?.image || require('../assets/vs_blue.png')} style={styles.vsBlueImage}></Image>
        <Text style={styles.phoneName}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={styles.rate}>
            <Image style={styles.starImage} source={require('..//assets/star.png')}></Image>
            <Image style={styles.starImage} source={require('..//assets/star.png')}></Image>
            <Image style={styles.starImage} source={require('..//assets/star.png')}></Image>
            <Image style={styles.starImage} source={require('..//assets/star.png')}></Image>
            <Image style={styles.starImage} source={require('..//assets/star.png')}></Image>
            <Text style={styles.textRate}>(Xem 828 đánh giá)</Text>
        </View>

        <View style={styles.price}>
            <Text style={styles.priceText}>1.790.000 đ</Text>
            <Text style={styles.realPrice}>1.790.000 đ</Text>
        </View>

        <View style={styles.help}>
            <Text style={styles.helpText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            <Image source={require('../assets/Group 1.png')} style={{width: 20, height: 20}}></Image>
        </View>
        
        <Pressable style={styles.choseColor}
            onPress={() => navigation.navigate('Screen2')}
        >
            4 MÀU-CHỌN MÀU
            <Image source={require('../assets/Vector.png')} style={{width: 12, height: 14, resizeMode: 'contain',marginLeft:40}}></Image>
        </Pressable>

        <Pressable style={styles.buyPress}>CHỌN MUA</Pressable>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    vsBlueImage: {
        width: 301,
        height: 361,
        marginTop: 20,
        resizeMode: 'contain',
        marginLeft: 29
    },
    phoneName: {
        marginTop: 4,
        marginLeft: 22,
        fontWeight: 700,
        fontSize: 17,
    },
    rate: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 22,
    },
    starImage: {
        width: 23,
        height: 25,
        resizeMode: 'contain',
        marginTop: 5,
        marginRight: 2,
    },
    textRate: {
        fontSize: 17,
        fontWeight: 700,
        marginTop: 5,
        marginLeft: 20,
    },
    price: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 23,
        marginTop: 10,
        alignItems: 'center'
    },
    priceText: {
        fontSize: 21,
        fontWeight: 'bold',
    },
    realPrice: {
        fontSize: 15,
        fontWeight: 700,
        marginLeft: 40,
        marginTop: 2,
        color: '#00000094',
        textDecorationLine: 'line-through',
    },
    help: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 23,
        marginTop: 10,
    },
    helpText: {
        fontWeight: 'bold',
        color: '#FA0000',
        marginRight: 5
    },
    choseColor: {
        marginLeft: 18,
        marginTop: 15,
        borderWidth: 1,
        borderRadius: '10px',
        width: 332,
        height: 34,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        fontWeight: 500,
    },
    buyPress: {
        marginLeft: 21,
        marginTop: 60,
        borderRadius: '10px',
        width: 326,
        height: 44,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#F9F2F2',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
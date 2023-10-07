import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const usb = () => {
  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <View style={styles.productMedia}>
          <Image source={require("../usb/assets/usb.jpg")} style={styles.image} />
        </View>
        <Text style={styles.productText}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Cực kỳ hài lòng</Text>
        <View style={styles.rate}>
          <StarWrapper></StarWrapper>
          <StarWrapper></StarWrapper>
          <StarWrapper></StarWrapper>
          <StarWrapper></StarWrapper>
          <StarWrapper></StarWrapper>
        </View>
        <View style={styles.addPhoto}>
          <View style={styles.addPhotoMedia}>
            <Image source={require("../usb/assets/camera.png")} style={styles.image}></Image>
          </View>
          <Text style={styles.text}>Thêm hình ảnh</Text>
        </View>
        <TextInput
        placeholder='Hãy chi sẻ những điều mà bạn thích về sản phẩm'
        placeholderTextColor= "#ccc"
          multiline={true}
          numberOfLines={10}
          style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Gửi</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default usb

const StarWrapper = () => {
  return <View style={styles.starWrapper}>
    <Image style={styles.image} source={require("..//usb/assets/Start.png")}></Image>
  </View>
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    textAlign: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  product: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 70
  },
  productMedia: {
    width: 70,
    height: 70
  },
  productText: {
    width: 260,
    fontSize: 16,
    fontWeight: 700,
  },
  content: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
  },
  text: {
    fontSize: 18,
    fontWeight: 700,
  },
  rate: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 20
  },
  starWrapper: {
    width: 40,
    height: 40
  },
  addPhoto: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderWidth: 2,
    borderColor: "#3246a8"
  },
  addPhotoMedia: {
    width: 50,
    height: 40,
    marginRight: 15
  },
  input: {
    width: "100%",
    height: 200,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: "#000",
    marginTop: 20,
    fontSize : 18,
    fontWeight : 700,
    padding : 5
  },
  button : {
    backgroundColor : "#3246a8",
    width : "100%",
    padding : 15,
    justifyContent : "center",
    alignItems : "center",
    marginTop : 15
  },
  textButton : {
    color : "#fff",
    fontWeight :700,
    fontSize : 18
  }
})


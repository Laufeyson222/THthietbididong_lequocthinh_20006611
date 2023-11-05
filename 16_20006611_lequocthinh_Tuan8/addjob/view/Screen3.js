import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";

export default function Screen3({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/Frame.png")}
          style={styles.img}
        ></Image>
        <View style={styles.txtHeader}>
          <Text style={styles.txtHeader1}>Hi Twinkle</Text>
          <Text style={styles.txtHeader2}>Have agrate day a head</Text>
        </View>
        <Icon
          name="arrowleft"
          color="#000"
          size={25}
          style={styles.iconLeft}
          onPress={() => {
            navigation.navigate("Screen2");
          }}
        ></Icon>
      </View>
      <View style={styles.content}>
        <Text style={styles.txtContent}>ADD YOUR JOB</Text>
        <TouchableOpacity style={styles.input}>
          <Icon
            name="profile"
            color="#55e184"
            size={25}
            style={styles.iconProfile}
          ></Icon>
          <Text style={styles.txtProfile}>Input your job</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnFinish}
          onPress={() => {
            navigation.navigate("Screen2");
          }}
        >
          <Text style={styles.txtFinish}>FINISH</Text>
          <Icon
            name="arrowright"
            color="#fff"
            size={25}
            style={styles.iconRight}
          ></Icon>
        </TouchableOpacity>
        <Image
          source={require("../assets/list.png")}
          style={styles.img2}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //  justifyContent: 'center',
  },
  header: {
    marginTop: "10px",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  img: {
    width: "50px",
    height: "50px",
    marginLeft: "10px",
  },
  iconLeft: {
    marginTop: "10px",
    marginLeft: "10px",
  },
  txtHeader1: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  txtHeader2: {
    fontSize: "15px",
    fontWeight: "bold",
    color: "#c4c4c4",
  },
  content: {
    marginTop: "20px",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  txtContent: {
    marginTop: "20px",
    marginBottom: "20px",
    fontSize: "30px",
    fontWeight: "bold",
  },
  input: {
    width: "90%",
    height: "40px",
    flexDirection: "row",
    border: "1px solid #c4c4c4",
    borderRadius: "5px",
  },
  iconProfile: {
    marginTop: "5px",
    marginLeft: "5px",
  },
  txtProfile: {
    marginTop: "7px",
    marginLeft: "10px",
  },
  btnFinish: {
    width: "50%",
    height: "40px",
    border: "1px solid none",
    flexDirection: "row",
    backgroundColor: "#00bdd6",
    borderRadius: "10px",
    marginTop: "40px",
  },
  txtFinish: {
    marginLeft: "54px",
    marginTop: "7px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
  },
  iconRight: {
    marginTop: "6px",
    marginLeft: "8px",
  },
  img2: {
    marginTop: "50px",
    width: "250px",
    height: "250px",
  },
});
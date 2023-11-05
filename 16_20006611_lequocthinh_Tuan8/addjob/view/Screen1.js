import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/list.png")}
        style={styles.img}
      ></Image>
      <Text style={styles.txtHeader}>MANAGE YOUR TASK</Text>
      <TouchableOpacity style={styles.input}>
        <Icon name="mail" color="#000" size={25} style={styles.iconMail}></Icon>
        <Text style={styles.txtInput}>Enter your name</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnGetStarted}
        onPress={() => navigation.navigate("Screen2", { id: 2 })}
      >
        <Text style={styles.txtGetStarted}>GET STARTED</Text>
        <Icon
          name="arrowright"
          color="#fff"
          size={25}
          style={styles.iconRight}
        ></Icon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //  justifyContent: 'center',
    justifyContent: "space-around",
    width: "100%",
    height: "100%",
  },
  img: {
    width: "271px",
    height: "271px",
  },
  txtHeader: {
    color: "#8353e2",
    fontWeight: "bold",
    fontsize: "50px",
  },
  input: {
    width: "90%",
    height: "40px",
    border: "1px solid #c4c4c4",
    borderRadius: "10px",
    flexDirection: "row",
  },
  iconMail: {
    marginLeft: "10px",
    marginTop: "5px",
  },
  txtInput: {
    paddingLeft: "20px",
    marginTop: "8px",
    color: "#c4c4c4",
  },
  btnGetStarted: {
    width: "50%",
    height: "40px",
    border: "1px solid none",
    flexDirection: "row",
    backgroundColor: "#00bdd6",
    borderRadius: "10px",
  },
  txtGetStarted: {
    marginLeft: "24px",
    marginTop: "8px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
  },
  iconRight: {
    marginTop: "6px",
    marginLeft: "8px",
  },
});
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const Login = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("")
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35, fontWeight: "700" }}>LOG IN</Text>
      <View style={{ width: 390, height: 100}}>
        <View style={styles.userArea}>
          <Text style={{ width: 100, fontSize: 18, fontWeight: "700" }}>
            Username:
          </Text>
          <TextInput
            onChangeText={setUsername}
            style={{ width: 250, height: 45, borderWidth: 1, borderRadius: 5 }}
          />
        </View>
        <View style={styles.pwArea}>
          <Text style={{ width: 100, fontSize: 18, fontWeight: "700" }}>
            Password:
          </Text>
          <TextInput
            onChangeText={setPassword}
            style={{ width: 250, height: 45, borderWidth: 1, borderRadius: 5 }}
          />
        </View>
        <Text style={styles.errorArea}>{error}</Text>
      </View>
      <Pressable
        onPress={() => {
          fetch("https://6544af105a0b4b04436cbc5b.mockapi.io/login")
            .then((response) => response.json())
            .then((json) => {
              var arr = json.filter((item) => item.username === username);
              if (arr.length != 0) {
                if (arr[0].password === password) {
                  navigation.navigate("Todo",{id:arr[0].id});
                } 
                else setError("Password is wrong");
              } 
              else setError("Username is wrong");
            });
        }}
        style={styles.loginPress}
      >
        <Text style={{ fontSize: 20, fontWeight: "700"}}>
          Log in
        </Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "space-around",
  },
  userArea: 
  {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 10
  },
  pwArea:
  {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  loginPress:
  {
    width: 200,
    height: 50,
    borderRadius: 10,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  errorArea:
  { 
    fontSize: 16,
    color:'red',
    margin: 10,
  }
});

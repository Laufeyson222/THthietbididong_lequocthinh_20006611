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

export default function Screen2({ navigation, route }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const getJobs = async () => {
    try {
      const response = await fetch(
        "https://65470542902874dff3abe74c.mockapi.io/User/" + route.params?.id
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrowleft"
          color="#000"
          size={25}
          style={styles.iconLeft}
          onPress={() => {
            navigation.navigate("Screen1");
          }}
        ></Icon>
        <Image
          source={require("../assets/Frame.png")}
          style={styles.img}
        ></Image>
        <View style={styles.txtHeader}>
          <Text style={styles.txtHeader1}>Hi Twinkle</Text>
          <Text style={styles.txtHeader2}>Have agrate day a head</Text>
        </View>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.input}>
          <Icon
            name="search1"
            color="#000"
            size={25}
            style={styles.iconSearch}
          ></Icon>
          <Text style={styles.txtSearch}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data.Jobs}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => {
              return (
                <View style={styles.items}>
                  <Icon
                    name="checkcircleo"
                    color="#369f5b"
                    size={25}
                    style={styles.iconCheck}
                  ></Icon>
                  <Text style={styles.jobs}>{item.title}</Text>
                  <Icon
                    name="edit"
                    color="#e06f70"
                    size={25}
                    style={styles.iconEdit}
                  ></Icon>
                </View>
              );
            }}
          ></FlatList>
        )}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btnPlus}
          onPress={() => {
            navigation.navigate("Screen3");
          }}
        >
          <Icon
            name="plus"
            color="#fff"
            size={25}
            style={styles.iconPlus}
          ></Icon>
        </TouchableOpacity>
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
    marginLeft: "100px",
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
  input: {
    width: "90%",
    height: "40px",
    flexDirection: "row",
    border: "1px solid #c4c4c4",
    borderRadius: "5px",
  },
  iconSearch: {
    marginTop: "5px",
    marginLeft: "5px",
  },
  txtSearch: {
    marginTop: "6px",
    marginLeft: "10px",
  },
  list: {
    marginTop: "30px",
    width: "90%",
  },
  items: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "40px",
    borderRadius: "10px",
    marginBottom: "10px",
    backgroundColor: "#d6d8db",
  },
  jobs: {
    fontSize: "15px",
    fontWeight: "bold",
    marginTop: "9px",
  },
  iconCheck: {
    marginLeft: "10px",
    marginTop: "8px",
  },
  iconEdit: {
    marginRight: "10px",
    marginTop: "8px",
  },
  footer: {
    marginTop: "70px",
  },
  btnPlus: {
    backgroundColor: "#26c3d9",
    width: "70px",
    height: "70px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  },
});
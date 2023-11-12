import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const Todo = ({navigation, route}) => {
    const url = "https://6544af105a0b4b04436cbc5b.mockapi.io/login/";
    const [user, setUser] = useState({});
    const [job, setJob] = useState("");

    useEffect(() => {
        fetchData();
      }, [navigation, route]);
      const fetchData = () =>
        fetch(url + route.params?.id)
          .then((response) => response.json())
          .then((json) => {
            setUser(json);
          });

  return (
    <View style={styles.container}>
        <View style={styles.inputCon}>
            <TextInput style={styles.input} placeholder='Input your todo'
            onChangeText={setJob}></TextInput>
            <Pressable style={styles.addPress}
            onPress={() => {
                fetch(url + route.params?.id, {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      todo: [
                        ...user.todo,
                        {
                          id: (user.todo.length+1).toString(),
                          job:job
                        },
                      ],
                    }),
                  }).then((response) => {
                    if (response.ok) {
                      fetchData();
                    }
                  });
              }
            }>ADD</Pressable>
        </View>
        <View style={{marginTop: 50}}>
            <ScrollView>
                <FlatList data = {user.todo} renderItem={({item}) => (
                    <Pressable style={styles.list}>
                        <Text style={styles.todoField}>{item.job}</Text>
                        <Pressable style={styles.updatePress}
                        onPress={() => {
                            
                        }}>UPD</Pressable>
                        <Pressable style={styles.deletePress}
                        onPress={() => {
                            fetch(
                                user.todo + item.id,
                                {
                                  method: "DELETE",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                }
                              ).then((response) => {
                                if (response.ok) {
                                  fetchData();
                                }
                              });
                        }}>DEL</Pressable>
                    </Pressable>
                )}>
                </FlatList>
            </ScrollView>
        </View>
        
      
    </View>
  )
}

export default Todo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: 'lightblue',
    },
    inputCon:{
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        width: 250,
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        fontSize: 18,
    },
    addPress: {
        marginLeft: 10,
        borderWidth: 1,
        width: 58,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'green',
        fontWeight: 700,
    },
    list: {
        width: 350,
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'gray'
    },
    todoField: {
        width: 200,
        fontSize: 18
    },
    updatePress: {
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
        fontWeight: 700,
        width: 50,
        marginLeft: 10,
    },
    deletePress: {
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        fontWeight: 700,
        width: 50,
        marginLeft: 10,
        color: 'white',
    }
})
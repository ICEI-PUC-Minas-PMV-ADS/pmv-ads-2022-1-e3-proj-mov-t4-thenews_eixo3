import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Button,
  Text,
  TextInput,
  Platform,
} from "react-native";

import InputComponent from "../components/Input";

import Index from "./tab/Index";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SQLite from "expo-sqlite";

function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase("db.db");
  return db;
}

const db = openDatabase();

const Tab = createBottomTabNavigator();

export default function (props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [data, setData] = useState("");
  const [database, setDatabase] = useState([]);
  console.warn(database);

  const lastPositionDatabase = database?.length - 1;
  const lastEmail =
    typeof lastPositionDatabase === "number"
      ? database[lastPositionDatabase]?.email
      : "";
  const lastSenha =
    typeof lastPositionDatabase === "number"
      ? database[lastPositionDatabase]?.senha
      : "";

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists login (id integer primary key not null, email string, senha string);"
      );
    });
    db.transaction((tx) => {
      tx.executeSql("select * from login", [], (_, { rows }) => {
        // console.log("db", JSON.stringify(rows));
        setDatabase(rows._array);
      });
    }, null);
  }, []);

  const getUser = async () => {
    try {
      const response = await fetch(
        `https://the-news-back-end.herokuapp.com/user/email/${email}`
      );

      if (!data == []) {
        props.navigation.navigate("Index");
      } else {
        console.log("usuario invalido");
      }
      const jsonObj = await response.json();
      setData(jsonObj);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        resizeMode={"contain"}
        source={require("../assets/LOGO-1.png")}
      />
      <TextInput
        defaultValue={lastEmail}
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        defaultValue={lastSenha}
        style={styles.input}
        placeholder="Senha"
        onChangeText={(text) => setSenha(text)}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          db.transaction((tx) => {
            tx.executeSql("insert into login (email, senha) values (?, ?)", [
              email,
              senha,
            ]);
          }, null);
          getUser();
        }}
      >
        <Text style={styles.text}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-end",
    paddingBottom: "10%",
  },
  stretch: {
    flex: 1,
    margin: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#C68585",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  input: {
    backgroundColor: "#FFF",
    marginTop: 15,
    marginBottom: 8,
    height: 50,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    fontSize: 20,
  },
});

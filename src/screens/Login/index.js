import React from "react";
import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../İmages/login.png")} style={styles.image} />
      <Text style={styles.text}>Please Enter NickName ?</Text>
      <TextInput placeholder="NickName" style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ekle</Text>
      </TouchableOpacity>
    </View>
  );
};

export { Login };


import React from "react";
import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, Button } from "react-native";
import styles from "./styles";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../İmages/login.png")} style={styles.image} />
      <Text style={styles.text}>Please Enter NickName ?</Text>
      <TextInput placeholder="NickName" style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ekle</Text>
      </TouchableOpacity>
      <Button title="Başlat" onPress={() => { navigation.navigate('Stacknav', { screen: 'CameraDetector' }); }}> </Button>

    </View>
  );
};

export { Login };

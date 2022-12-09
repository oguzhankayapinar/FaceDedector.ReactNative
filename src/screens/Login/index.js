import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Button } from "react-native";
import styles from "./styles";
import { useTranslation } from 'react-i18next';
import '../../../assets/i18n/language'




const Login = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../İmages/login.png")} style={styles.image} />
      <Text style={styles.text}>Please Enter NickName ?</Text>
      <TextInput placeholder="NickName" style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{t("add")}</Text>
      </TouchableOpacity>

      <Button title="çevir" onPress={() => i18n.language === "en" ? changeLanguage("tr") : changeLanguage("en")} />

    </View>
  );
};

export { Login };

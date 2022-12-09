import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";
import '../../../assets/i18n/language';
import { useTranslation } from 'react-i18next';



const Select = ({ navigation }) => {
  const openCamera = () => {
    navigation.navigate("CameraDetector", { screen: "CameraDetector" });
    console.log("click", navigation.navigate("CameraDetector", { screen: "CameraDetector" }));
  };
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <View style={styles.container}>
      <Text> Select Page </Text>
      <Button title={t("add")} onPress={openCamera} />

      <Button title="çevir" onPress={() => i18n.language === "en" ? changeLanguage("tr") : changeLanguage("en")} />

    </View>
  );
};

export { Select };

/**  <Picker selectedValue={selectedValue} style={{ height: 50, width: 150 }} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
       <Button
        title="Başlat"
        onPress={() => {
          navigation.navigate({ name: "Stacknav", params: { screen: "Deneme" } });
          console.log("click", navigation.navigate("Stacknav", { screen: "CameraDetector" }));
        }}
      >
        {" "}
      </Button>
      */

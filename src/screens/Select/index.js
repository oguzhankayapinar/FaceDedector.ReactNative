import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

const Select = ({ navigation }) => {
  const openCamera = () => {
    navigation.navigate("CameraDetector", { screen: "CameraDetector" });
    console.log("click", navigation.navigate("CameraDetector", { screen: "CameraDetector" }));
  };

  return (
    <View style={styles.container}>
      <Text> Select Page </Text>
      <Button title="ekle" onPress={openCamera} />
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

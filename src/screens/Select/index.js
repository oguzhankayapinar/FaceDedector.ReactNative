import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const Select = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <Text> Select Page </Text>
    </View>
  );
};

export { Select };

/**  <Picker selectedValue={selectedValue} style={{ height: 50, width: 150 }} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker> */

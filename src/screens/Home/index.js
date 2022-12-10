import React, { useMemo } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./styles";

const Home = () => {
  const state = useSelector((state) => state.App.list);
  console.log("Home sayfa", state);
  return (
    <View style={styles.container}>
      <Text> home pages </Text>
      <Text>Home</Text>
    </View>
  );
};
export { Home };

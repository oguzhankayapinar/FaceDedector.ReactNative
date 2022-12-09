import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stacknav } from "./src/navigation/StackNavigation";
import './assets/i18n/language'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Stacknav />
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export { styles };

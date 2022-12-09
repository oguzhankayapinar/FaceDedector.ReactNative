import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stacknav } from "./src/navigation/StackNavigation";

import './assets/i18n/language'

import { Provider } from "react-redux";
import store from "./src/redux";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Stacknav />
        <StatusBar hidden={true} />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export { styles };

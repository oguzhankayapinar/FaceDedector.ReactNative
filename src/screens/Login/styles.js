import { StyleSheet } from "react-native";
import { W, H } from "../../utils/core/ui/dimensions";
import colors from "../../theme/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightpink,
    justifyContent: "center",
  },
  image: {
    width: W(100),
    height: H(50),
  },
  text: {
    color: colors.blue,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: H(5),
  },
  input: {
    borderWidth: 0.5,
    fontSize: 18,
    textAlign: "center",
    marginTop: H(3),
    padding: 7,
  },
  button: {
    borderWidth: 0.5,
    backgroundColor: colors.darkpink,
    padding: 10,
    marginTop: H(1),
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { W, H } from "../../utils/core/ui/dimensions";
import colors from "../../theme/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightpink,
  },
  image: {
    width: "100%",
    height: "60%",
  },
  text: {
    color: colors.blue,
    fontSize: 20,
    fontWeight: "bolder",
    textAlign: "center",
    marginTop: H(5),
  },
  input: {
    borderWidth: 0.5,
    fontSize: 18,
    textAlign: "center",
    marginTop: H(3),
    padding: 5,
  },
  button: {
    borderWidth: 0.5,
    backgroundColor: colors.darkpink,
    padding: 8,
    marginTop: H(1),
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { W, H } from "../../utils/core/ui/dimensions";
import colors from "../../theme/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightpink,
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    fontSize: 14,
    color: "#424642",
    fontWeight: "bold",
    marginBottom: 20,
    width: W(91),
  },
  inputone: {
    borderWidth: 1,
    borderColor: colors.darkpink,
    padding: 8,
    width: W(90),
    marginVertical: 5,
    fontSize: 17,
    borderRadius: 5,
    alignSelf: "center",
  },
  nickname: {
    fontSize: 18,
    borderWidth: 0.5,
    borderColor: colors.darkblue,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    color: "white",
    fontWeight: "bolder",
    width: W(90),
    textAlign: "center",
    backgroundColor: colors.blue,
  },
  addContainer: {
    borderWidth: 1,
    width: W(100),
    marginVertical: 15,
  },
  inputAdd: {
    color: "white",
    padding: 10,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: colors.darkpink,
  },
  cameraContainer: {
    borderWidth: 1,
    width: W(100),
  },
  cameraText: {
    color: "white",
    padding: 10,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: colors.darkblue,
  },
  guestion: {
    fontSize: 19,
    fontWeight: "bolder",
    alignSelf: "flex-start",
    marginLeft: "5%",
  },
});

export default styles;

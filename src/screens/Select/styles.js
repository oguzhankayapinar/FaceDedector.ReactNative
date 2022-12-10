import { StyleSheet } from "react-native";
import { W, H } from "../../utils/core/ui/dimensions";
import colors from "../../theme/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightpink,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  description: {
    fontSize: 14,
    color: "#424642",
    fontWeight: "bold",
    width: W(91),
    position: "absolute",
    bottom: 20,
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
    width: W(100),
    marginVertical: 10,
  },
  inputAdd: {
    color: "white",
    padding: 10,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: colors.darkpink,
  },
  cameraContainer: {
    width: W(100),
  },
  cameraText: {
    color: "white",
    padding: 10,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: colors.blue,
  },
  guestion: {
    fontSize: 19,
    fontWeight: "bolder",
    alignSelf: "flex-start",
    marginLeft: "5%",
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { W, H } from "../../utils/core/ui/dimensions";
import colors from "../../theme/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.pink,
    flexDirection: "column",
  },
  kurucilt: {
    marginBottom: 10,
    marginTop: 10,
    height: H(100)
  },
  kurucilttext: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  kuruciltdescription: {
    color: colors.lightpink,
    fontSize: 16,
    textAlign: "center",
  },
  kuruskincare: {
    color: "white",
    fontSize: 17,
    textAlign: "center",
    marginVertical: 10,
  },
  kuruskincaretext: {
    color: colors.lightpink,
    fontSize: 16,
    textAlign: "center",
  },
  karmaciltcontainer: {
    marginBottom: 10,
  },
  karmacilt: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
  },
  karmadesc: {
    color: colors.lightpink,
    fontSize: 16,
    textAlign: "center",
  },
  karmaskincare: {
    color: "white",
    fontSize: 17,
    textAlign: "center",
    marginVertical: 10,
  },
  karmaskincaretext: {
    color: colors.lightpink,
    fontSize: 16,
    textAlign: "center",
  },
  yaglıcontainer: {
    margin: 10,
  },
  yaglıcilt: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
  },
  yaglıdesc: {
    color: colors.lightpink,
    fontSize: 16,
    textAlign: "center",
  },
  yaglıskincare: {
    color: "white",
    fontSize: 17,
    textAlign: "center",
    marginVertical: 10,
  },
  yaglıskincaretext: {
    color: colors.lightpink,
    fontSize: 16,
    textAlign: "center",
  },
  faces: {
    flexDirection: "row",
    width: W(27),
    position: "relative",
    height: H(12),
    margin: 5,
    justifyContent: "center",
  },
  face: {
    position: "absolute",
    marginLeft: 30,
    marginTop: 5,
    zIndex: 2,
  },
  dry: {
    position: "absolute",
    marginLeft: 32.5,
    marginTop: 9,
    zIndex: 3,
  },
  body: {
    position: "absolute",
    marginLeft: 32,
    marginTop: 50,
  },
  eyes: {
    position: "absolute",
    marginLeft: 38,
    marginTop: 25,
    zIndex: 5,
  },
  faceskarma: {
    alignSelf: "center",
    marginTop: 25,
  },
  facesyaglı: {
    alignSelf: "center",
    marginTop: 25,
    flexDirection: "row",
  },
  oilforehead: {
    zIndex: 6,
    position: "absolute",
    marginLeft: 32,
    marginTop: 8,
  },
  oilnose: {
    zIndex: 6,
    position: "absolute",
    marginLeft: 51,
    marginTop: 25,
  },
  oiljaw: {
    zIndex: 6,
    position: "absolute",
    marginLeft: 50,
    marginTop: 58,
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

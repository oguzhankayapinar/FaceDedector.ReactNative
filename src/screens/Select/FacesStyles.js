import React from "react";
import { StyleSheet } from "react-native";
import { W, H } from "../../utils/core/ui/dimensions";

const styles = StyleSheet.create({
  facesContainer: {
    flexDirection: "row",
    marginVertical: 15,
  },
  faces: {
    flexDirection: "row",
    width: W(29),
    position: "relative",
    height: H(12),
    top: 0,
    marginHorizontal: 20,
  },
  facebg: {
    position: "absolute",
  },
  body: {
    position: "absolute",
    bottom: 10,
    marginLeft: 30,
  },
  face: {
    position: "absolute",
    marginLeft: 30,
    marginTop: 5,
  },
  eyes: {
    position: "absolute",
    marginLeft: 39,
    marginTop: 27,
    zIndex: 5,
  },
  oildry: {
    position: "absolute",
    marginLeft: 32.5,
    marginTop: 10,
    zIndex: 2,
  },
  faces1: {
    borderWidth: 1,
    flexDirection: "row",
    width: W(90),
    position: "relative",
    height: H(12),
    top: 0,
    margin: 10,
  },
  facebg1: {
    position: "absolute",
  },
  body1: {
    position: "absolute",
    bottom: 10,
    marginLeft: 30,
  },
  face1: {
    position: "absolute",
    marginLeft: 30,
    marginTop: 5,
  },
  eyes1: {
    position: "absolute",
    marginLeft: 39,
    marginTop: 27,
  },
  oilnose: {
    position: "absolute",
    marginLeft: 52,
    marginTop: 27,
    zIndex: 10,
  },
  oilforehead: {
    position: "absolute",
    marginLeft: 32,
    marginTop: 7,
    zIndex: 10,
  },
  jaw: {
    position: "absolute",
    marginLeft: 50,
    marginTop: 60,
    zIndex: 10,
  },
});

export default styles;

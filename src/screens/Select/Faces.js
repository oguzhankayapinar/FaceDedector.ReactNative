import React from "react";
import { View, Image } from "react-native";
import styles from "./FacesStyles";

const Faces = () => {
  return (
    <View style={styles.facesContainer}>
      <View style={styles.faces}>
        <Image source={require("../../İmages/facebg.png")} style={styles.facebg} />
        <Image source={require("../../İmages/body.png")} style={styles.body} />
        <Image source={require("../../İmages/oildry.png")} style={styles.oildry} />
        <Image source={require("../../İmages/face.png")} style={styles.face} />
        <Image source={require("../../İmages/eyes.png")} style={styles.eyes} />
      </View>
      <View style={styles.faces}>
        <Image source={require("../../İmages/facebg.png")} style={styles.facebg1} />
        <Image source={require("../../İmages/body.png")} style={styles.body1} />
        <Image source={require("../../İmages/oilnose.png")} style={styles.oilnose} />
        <Image source={require("../../İmages/oilforehead.png")} style={styles.oilforehead} />
        <Image source={require("../../İmages/face.png")} style={styles.face1} />
        <Image source={require("../../İmages/oiljaw.png")} style={styles.jaw} />
        <Image source={require("../../İmages/eyes.png")} style={styles.eyes1} />
      </View>
    </View>
  );
};

export { Faces };

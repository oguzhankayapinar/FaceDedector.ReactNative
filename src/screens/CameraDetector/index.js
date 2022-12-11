import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Camera } from "expo-camera";
import * as FaceDetector from "expo-face-detector";
import colors from "../../theme/color";
import { t } from "i18next";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CameraDetector = ({ navigation }) => {
  const [hasPermission, setHasPermission] = React.useState();
  const [faceData, setFaceData] = React.useState([]);

  const [box, setBox] = React.useState(null);

  // camera permission
  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // face status
  function getFaceDataView() {
    if (faceData.length === 0) {
      return (
        <View style={styles.faces}>
          <Text style={styles.faceDesc}>No faces :(</Text>
        </View>
      );
    } else {
      return faceData.map((face, index) => {
        const eyesShut = face.rightEyeOpenProbability < 0.4 && face.leftEyeOpenProbability < 0.4;
        const winking = !eyesShut && (face.rightEyeOpenProbability < 0.4 || face.leftEyeOpenProbability < 0.4);
        const smiling = face.smilingProbability > 0.7;
        return (
          <View style={styles.faces} key={index}>
            <Text style={styles.faceDesc}>Eyes Shut: {eyesShut.toString()}</Text>
            <Text style={styles.faceDesc}>Winking: {winking.toString()}</Text>
            <Text style={styles.faceDesc}>Smiling: {smiling.toString()}</Text>
            {eyesShut ? <Text>Close the Eyes</Text> : <Text>You eyes Good</Text>}
            {winking ? <Text> harika görünüyorsun </Text> : <Text> Solgunsun </Text>}
            {smiling ? <Text> harika görünüyorsun </Text> : <Text> Solgunsun </Text>}
          </View>
        );
      });
    }
  }

  // camera open func
  const handleFacesDetected = ({ faces }) => {
    setFaceData(faces);
    console.log(faces);

    if (faces[0]) {
      setBox({
        boxs: {
          width: faces[0].bounds.size.width,
          height: faces[0].bounds.size.height,
          x: faces[0].bounds.origin.x,
          y: faces[0].bounds.origin.y,
          yawAngle: faces[0].yawAngle,
          rollAngle: faces[0].rollAngle,
        },
        rightEyePosition: faces[0].rightEyePosition,
        leftEyePosition: faces[0].leftEyePosition,
        bottomMounthPosition: faces[0].bottomMounthPosition,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Camera
        type={Camera.Constants.Type.front}
        style={styles.camera}
        onFacesDetected={handleFacesDetected}
        faceDetectorSettings={{
          mode: FaceDetector.FaceDetectorMode.accurate,
          detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
          runClassifications: FaceDetector.FaceDetectorClassifications.all,
          minDetectionInterval: 100,
          tracking: true,
        }}
      >
        {getFaceDataView()}

        {
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home", { screen: "Home" });
              console.log(navigation.navigate("Home", { screen: "Home" }));
            }}
            style={styles.homepage}
          >
            <Text style={styles.homebutton}>{t("takeaphoto")}</Text>
          </TouchableOpacity>
        }
      </Camera>
      {box && (
        <View
          style={styles.bound({
            width: box.boxs.width,
            height: box.boxs.height,
            x: box.boxs.x,
            y: box.boxs.y,
          })}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  camera: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  faces: {
    position: "absolute",
    backgroundColor: " #transparent",
    borderWidth: 2,
    borderColor: colors.darkblue,
    zIndex: 1000,
    top: 10,
    margin: 16,
    padding: 20,
    borderRadius: 10,
  },
  faceDesc: {
    fontSize: 20,
  },
  homepage: {
    position: "absolute",
    bottom: 20,
    borderRadius: 50,
    padding: 20,
    backgroundColor: colors.darkblue,
  },
  homebutton: {
    color: "white",
    fontSize: 17,
  },
  bound: ({ width, height, x, y }) => {
    return {
      position: "absolute",
      top: y,
      left: x - 10,
      height,
      width,
      borderWidth: 1,
      borderColor: colors.darkblue,
      zIndex: 3000,
    };
  },
});

export { CameraDetector };

/**
 *          <Button
            title="denemeye git "
            onPress={() => {
              navigation.navigate("Stacknav", { screen: "Deneme" });
              console.log(navigation.navigate("Stacknav", { screen: "Deneme" }));
            }}
          >
            {" "}
          </Button>
 */

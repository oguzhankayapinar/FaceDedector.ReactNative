import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setNickName } from "../../redux/actions/app";
import * as yup from "yup";
import styles from "./styles";

const Login = ({ navigation }, props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.App.name);
  console.log("login name sayfası", state);

  const addNickName = ({ nickName }) => {
    dispatch(setNickName(nickName));
    navigation.navigate("Select", { screen: "Select" });
  };
  return (
    <View style={styles.container}>
      <Image source={require("../../İmages/login.png")} style={styles.image} />
      <Text style={styles.text}>Please Enter NickName ?</Text>

      <Formik
        initialValues={{ nickName: "" }}
        onSubmit={addNickName}
        validationSchema={yup.object().shape({
          nickName: yup.string().required("NickName is required."),
        })}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <View>
            <TextInput placeholder="NickName" style={styles.input} value={values.nickName} onChangeText={handleChange("nickName")} />
            {touched.nickName && errors.nickName && <Text style={{ fontSize: 13, color: "red" }}>{errors.nickName}</Text>}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Ekle</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export { Login };

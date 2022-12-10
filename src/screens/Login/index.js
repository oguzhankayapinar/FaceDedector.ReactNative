import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setNickName } from "../../redux/actions/app";
import * as yup from "yup";
import styles from "./styles";
import { useTranslation } from 'react-i18next';
import '../../../assets/i18n/language';
import FontAwesome from '@expo/vector-icons/FontAwesome';






const Login = ({ navigation }, props) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.App.name);
  console.log("login name sayfası", state);
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const addNickName = ({ nickName }) => {




    dispatch(setNickName(nickName));
    navigation.navigate("Select", { screen: "Select" });
  };
  return (

    <View style={styles.container}>

      <Image source={require("../../İmages/login.png")} style={styles.image} />
      <FontAwesome.Button name="language" backgroundColor={"#FFD1D1"} justifyContent="center" margin={0} color={"#E94560"} size={30} onPress={() => i18n.language === "en" ? changeLanguage("tr") : changeLanguage("en")} />
      <Text style={styles.text}>{t("nicks")}</Text>
      <Formik
        initialValues={{ nickName: "" }}
        onSubmit={addNickName}
        validationSchema={yup.object().shape({
          nickName: yup.string().required("NickName is required."),
        })}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <View>
            <TextInput placeholder={t("nickname")} style={styles.input} value={values.nickName} onChangeText={handleChange("nickName")} />
            {touched.nickName && errors.nickName && <Text style={{ fontSize: 13, color: "red" }}>{errors.nickName}</Text>}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>{t("add")}</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>

    </View>

  );
};

export { Login };

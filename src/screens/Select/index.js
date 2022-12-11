import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import { setApp } from "../../redux/actions/app";
import { Faces } from "./Faces";
import styles from "./styles";
import "../../../assets/i18n/language";
import { useTranslation } from "react-i18next";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Select = ({ navigation }, props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.App.list);
  const name = useSelector((state) => state.App.name);
  console.log("select sayfası", state, name);

  const openCamera = () => {
    navigation.navigate("CameraDetector", { screen: "CameraDetector" });
  };

  const addSelect = (values) => {
    console.log(values);
    dispatch(setApp([values]));
  };
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <View style={styles.container}>
      <Faces />
      {name && <Text style={styles.nickname}>Welcome now text to input {name}</Text>}

      <Text style={styles.description}>{t("command")}</Text>
      <Formik
        initialValues={{ cilt: "", makeup: "", washing: "", useskincare: "" }}
        onSubmit={addSelect}
        validationSchema={yup.object().shape({
          cilt: yup.string().max(5).min(3, "Can not be less than 3 characters.").required("Is required."),
          makeup: yup.string().required("Is required.").max(5),
          washing: yup.string().required("Is required.").max(5),
          useskincare: yup.string().min(5, "Can not be less than 4 characters.").required("Is required."),
        })}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <View>
            <Text style={styles.guestion}>{t("query1")}</Text>
            <TextInput
              placeholder={t("ans1")}
              style={styles.inputone}
              returnKeytype=" done "
              value={values.cilt}
              onChangeText={handleChange("cilt")}
            />
            {touched.cilt && errors.cilt && <Text style={{ fontSize: 13, color: "red", marginLeft: 20 }}>{errors.cilt}</Text>}
            <Text style={styles.guestion}>{t("query2")}</Text>
            <TextInput
              placeholder={t("ans2")}
              style={styles.inputone}
              returnKeytype=" done "
              value={values.makeup}
              onChangeText={handleChange("makeup")}
            />
            {touched.makeup && errors.makeup && <Text style={{ fontSize: 13, color: "red", marginLeft: 20 }}>{errors.makeup}</Text>}
            <Text style={styles.guestion}>{t("query3")}</Text>
            <TextInput
              placeholder={t("ans2")}
              style={styles.inputone}
              returnKeytype=" done "
              value={values.washing}
              onChangeText={handleChange("washing")}
            />
            {touched.washing && errors.washing && <Text style={{ fontSize: 13, color: "red", marginLeft: 20 }}>{errors.washing}</Text>}
            <Text style={styles.guestion}>{t("query4")}</Text>
            <TextInput
              placeholder={t("ans4")}
              style={styles.inputone}
              returnKeytype=" done "
              value={values.useskincare}
              onChangeText={handleChange("useskincare")}
            />
            {touched.useskincare && errors.useskincare && <Text style={{ fontSize: 13, color: "red", marginLeft: 20 }}>{errors.useskincare}</Text>}

            <FontAwesome.Button
              name="language"
              backgroundColor={"#FFD1D1"}
              justifyContent="center"
              margin={0}
              color={"#E94560"}
              size={30}
              onPress={() => (i18n.language === "en" ? changeLanguage("tr") : changeLanguage("en"))}
            />

            <TouchableOpacity onPress={handleSubmit} style={styles.addContainer}>
              <Text style={styles.inputAdd}>{t("add")}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={openCamera} style={styles.cameraContainer}>
              <Text style={styles.cameraText}>{t("cam")}</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export { Select };
/**        <View ></View>
 */

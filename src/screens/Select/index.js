import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import { setApp } from "../../redux/actions/app";
import { Faces } from "./Faces";
import styles from "./styles";

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

  return (
    <View style={styles.container}>
      <Faces />
      {name && <Text style={styles.nickname}>Welcome now text to input {name}</Text>}

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
            <Text style={styles.guestion}>Sabah uyanınca cildin nasıl olur ?</Text>
            <TextInput
              placeholder="Yağlı, kuru, karma"
              style={styles.inputone}
              returnKeytype=" done "
              value={values.cilt}
              onChangeText={handleChange("cilt")}
            />
            {touched.cilt && errors.cilt && <Text style={{ fontSize: 13, color: "red", marginLeft: 20 }}>{errors.cilt}</Text>}
            <Text style={styles.guestion}>Makyaj yapıyor musun ?</Text>
            <TextInput
              placeholder="evet / hayır"
              style={styles.inputone}
              returnKeytype=" done "
              value={values.makeup}
              onChangeText={handleChange("makeup")}
            />
            {touched.makeup && errors.makeup && <Text style={{ fontSize: 13, color: "red", marginLeft: 20 }}>{errors.makeup}</Text>}
            <Text style={styles.guestion}>Gün içinde cildini yıkamak istiyor musun ?</Text>
            <TextInput
              placeholder="evet / hayır"
              style={styles.inputone}
              returnKeytype=" done "
              value={values.washing}
              onChangeText={handleChange("washing")}
            />
            {touched.washing && errors.washing && <Text style={{ fontSize: 13, color: "red", marginLeft: 20 }}>{errors.washing}</Text>}
            <Text style={styles.guestion}>Cildini yıkarken ne kullanıyorsun ?</Text>
            <TextInput
              placeholder="sabun / yüz yıkama jeli "
              style={styles.inputone}
              returnKeytype=" done "
              value={values.useskincare}
              onChangeText={handleChange("useskincare")}
            />
            {touched.useskincare && errors.useskincare && <Text style={{ fontSize: 13, color: "red", marginLeft: 20 }}>{errors.useskincare}</Text>}
            <TouchableOpacity onPress={handleSubmit} style={styles.addContainer}>
              <Text style={styles.inputAdd}>Add</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={openCamera} style={styles.cameraContainer}>
              <Text style={styles.cameraText}>Open Camera</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <Text style={styles.description}>
        "Fill in the entries first, then hit the add button. After doing the above, press the open camera button."
      </Text>
    </View>
  );
};

export { Select };
/**        <View ></View>
 */

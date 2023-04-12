import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import { Pressable, StyleSheet, View } from "react-native";
import theme from "../theme";
import { Formik } from "formik";
import * as yup from "yup";

const styles = StyleSheet.create({
  textInput: {
    placeholderTextColor: theme.colors.textSecondary,
    flexGrow: 1,
    borderColor: theme.colors.textSecondary,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 4,
    padding: theme.padding.default,
    marginBottom: theme.margin.default,
    height: 40,
    fontSize: theme.fontSizes.formInput,
  },
  container: {
    display: "flex",
    backgroundColor: "#ffffff",
    padding: 15,
  },
  signinBtn: {
    padding: 15,
    backgroundColor: theme.colors.blue,
    borderRadius: 4,
  },
  signinBtnText: {
    color: theme.colors.white,
    alignSelf: "center",
  },
});

const SignInForm = ({ onSubmit }) => {
  const initialValues = { username: "", password: "" };

  const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("password is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput
            name="username"
            placeholder="Username"
            style={styles.textInput}
          />
          <FormikTextInput
            name="password"
            placeholder="Password"
            secureTextEntry={true}
            style={styles.textInput}
          />
          <Pressable onPress={handleSubmit} style={styles.signinBtn}>
            <Text style={styles.signinBtnText}>SignIn</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignInForm;

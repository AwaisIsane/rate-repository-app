import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import { Pressable, StyleSheet, View } from "react-native";
import theme from "../theme";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";
import useSignUp from "../hooks/useSignUp";
import useSignIn from "../hooks/useSignIn";

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

const SignUpForm = ({ onSubmit }) => {
  const initialValues = { username: "", password: "", confirmPassword: "" };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required")
      .min(1, "min is 1")
      .max(30, "max is 0"),
    password: yup
      .string()
      .required("password is required")
      .min(5, "min is 5")
      .max(50, "max is 50"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required("Password confirm is required"),
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
          <FormikTextInput
            name="confirmPassword"
            placeholder="confirm Password"
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

const SignUp = () => {
  const [signIn, result] = useSignIn();
  const [addUser, res] = useSignUp();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await addUser({ username, password });
      const { data } = await signIn({ username, password });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <SignUpForm onSubmit={onSubmit} />
    </View>
  );
};

export default SignUp;

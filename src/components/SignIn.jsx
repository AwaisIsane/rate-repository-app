import { Formik } from "formik";
import { Pressable, StyleSheet, View } from "react-native";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";


const SignInForm = ({ onSubmit }) => {
  return (
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
      <Pressable onPress={onSubmit} style={styles.signinBtn}>
        <Text style={styles.signinBtnText}>SignIn</Text>
      </Pressable>
    </View>
  );
};

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
const SignIn = () => {
  const [signIn,result] = useSignIn();
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const {data} = await signIn({ username, password });
      navigate('/')
    } catch (e) {
      console.log(e)
    }

  };

  const initialValues = { username: "", password: "" };

  const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("password is required"),
  });
  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;

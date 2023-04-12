import { View } from "react-native";
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";
import SignInForm from "./SignInForm";

const SignIn = () => {
  const [signIn, result] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <SignInForm onSubmit={onSubmit} />
    </View>
  );
};

export default SignIn;

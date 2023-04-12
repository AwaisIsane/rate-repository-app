import { useMutation } from "@apollo/client";
import { ADD_USER } from "../graphql/mutations";

const useSignUp = () => {
  const [mutate, result] = useMutation(ADD_USER);

  const addUser = async (user) => {
    const { data } = await mutate({
      variables: { user },
    });
    return data.createUser;
  };
  return [addUser, result];
};

export default useSignUp;

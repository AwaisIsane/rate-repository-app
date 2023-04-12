import { useMutation } from "@apollo/client";
import { ADD_REVIEW } from "../graphql/mutations";

const useReview = () => {
  const [mutate, result] = useMutation(ADD_REVIEW);

  const addReview = async (review) => {
    const { data } = await mutate({
      variables: { review },
    });
    return data.createReview;
  };
  return [addReview, result];
};

export default useReview;

import { useNavigate } from "react-router-native";
import useReview from "../hooks/useReview";
import { Pressable, StyleSheet, View } from "react-native";
import theme from "../theme";
import * as yup from "yup";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

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

const ReviewFormContainer = ({ onSubmit }) => {
  const initialValues = {
    ownerName: "",
    rating: 0,
    repositoryName: "",
    text: "",
  };

  const validationSchema = yup.object().shape({
    ownerName: yup.string().required("repo owner name is required"),
    repositoryName: yup.string().required("repo name is required"),
    text: yup.string(),
    rating: yup
      .number()
      .required("rating is required")
      .integer()
      .min(0, "minimum rating is 0")
      .max(100, "max rating is 100"),
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
            name="ownerName"
            placeholder="ownerName"
            style={styles.textInput}
          />
          <FormikTextInput
            name="repositoryName"
            placeholder="repositoryName"
            style={styles.textInput}
          />
          <FormikTextInput
            name="rating"
            placeholder="rating between 0 and 100"
            style={styles.textInput}
          />
          <FormikTextInput
            name="text"
            placeholder="text"
            style={styles.textInput}
          />
          <Pressable onPress={handleSubmit} style={styles.signinBtn}>
            <Text style={styles.signinBtnText}>Add Review</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};
const ReviewForm = () => {
  const [addReview, result] = useReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, rating, repositoryName, text } = values;

    const review =
      text === ""
        ? { ownerName, rating: Number(rating), repositoryName }
        : { ownerName, rating: Number(rating), repositoryName, text };
    try {
      const { data } = await addReview(review);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <ReviewFormContainer onSubmit={onSubmit} />
    </View>
  );
};

export default ReviewForm;

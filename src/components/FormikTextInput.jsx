import { StyleSheet } from "react-native";

import TextInput from "./TextInput";
import Text from "./Text";
import theme from "../theme";
import { useField } from "formik";

const styles = StyleSheet.create({
  errorText: {
    marginBottom: 5,
    color: theme.colors.error,
  },
  errorBorder: {
    borderColor: theme.colors.error,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  props.style = showError
    ? { ...props.style, borderColor: theme.colors.error }
    : { ...props.style };
  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;

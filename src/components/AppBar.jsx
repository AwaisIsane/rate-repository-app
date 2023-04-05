import { View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 16,
    backgroundColor: theme.colors.backgroundSecondary,
    paddingBottom:16,

  },
  text: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
  },

  button : {
    padding:theme.padding.default,
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text color="textSecondary" fontWeight="bold" style={styles.text}>
          Repositories
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBar;

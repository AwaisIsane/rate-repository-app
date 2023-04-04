import { View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 16,
    backgroundColor: theme.colors.backgroundSecondary,
    paddingBottom:16,
    marginBottom:theme.margin.default,


  },
  text: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text color="textSecondary" fontWeight="bold" style={styles.text}>
          Repositories
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBar;

import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import Text from "./Text";
import { Link } from "react-router-native";

const Tabs = ({ to, text }) => (
  <Pressable style={styles.button}>
    <Link to={to}>
      <Text color="textSecondary" fontWeight="bold" style={styles.text}>
        {text}
      </Text>
    </Link>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 16,
    backgroundColor: theme.colors.backgroundSecondary,
    paddingBottom: 16,
  },
  text: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
  },

  button: {
    padding: theme.padding.default,
  },
});

const AppBar = () => {
  const items = [
    { to: "/", text: "Repositories" },
    { to: "/signin", text: "SignIn" },
  ];
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {items.map((item, i) => (
          <Tabs key={i} {...item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default AppBar;

import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import Text from "./Text";
import { Link } from "react-router-native";
import { useApolloClient, useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";
import useAuthStorage from "../hooks/useAuthStorage";
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
  const { data, loading } = useQuery(ME);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const items = [
    { to: "/", text: "Repositories" },
    { to: "/signin", text: "SignIn" },
    { to: "/review", text: "addReview" },
    { to: "/signup", text: "SignUp" },
  ];

  const authenticated = loading ? null : data.me;

  const signout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  if (authenticated) {
    return (
      <View style={styles.container}>
        <ScrollView horizontal>
          <Tabs {...items[0]} />
          <Tabs {...items[2]} />
          <Pressable onPress={signout} style={styles.button}>
            <Text color="textSecondary" fontWeight="bold" style={styles.text}>
              Logout
            </Text>
          </Pressable>
        </ScrollView>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Tabs {...items[0]} />
        <Tabs {...items[1]} />
        <Tabs {...items[3]} />
      </ScrollView>
    </View>
  );
};

export default AppBar;

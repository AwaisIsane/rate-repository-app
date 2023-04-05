import { Image, View } from "react-native";
import { StyleSheet } from "react-native-web";
import { kNumFormatter } from "../utils";
import Text from "./Text";
import theme from "../theme";

const FlexItem = ({ text, value }) => {
  return (
    <View style={styles.flexItem}>
      <Text fontWeight="bold">{text}</Text>
      <Text color="textSecondary">{kNumFormatter(value)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  imageContainer: {
    marginRight: theme.margin.default,
  },
  flexItem: {
    flexGrow: 1,
    paddingLeft: theme.padding.default2,
    paddingRight: theme.padding.default2,
  },
  flexContainerOne: {
    display: "flex",
    flexDirection: "row",
  },
  imageAvtar: {
    width: 66,
    height: 58,
    padding: theme.padding.default,
  },
  repoItem: {
    padding: theme.padding.default,
    borderBottomColor: theme.colors.textSecondary,
    borderBottomWidth: 5,
    borderBottomStyle: "solid,",
  },
  textBox: {
    // width: 0,
    // flexGrow: 1,
    // marginBottom: theme.margin.default,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flex: 0.8,
  },
  fullName: {
    fontSize: theme.fontSizes.subheading,
    marginBottom: theme.margin.default,
  },
  description: {},
  language: {
    backgroundColor: theme.colors.blue,
    color: theme.colors.white,
    padding: 5,
    marginTop: theme.margin.default,
    marginBottom: theme.margin.default,
    borderRadius: 5,
    flexShrink: 1,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.repoItem}>
      <View style={styles.flexContainerOne}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageAvtar}
            source={{ uri: item.ownerAvatarUrl }}
          />
        </View>
        <View style={styles.textBox}>
          <View style={styles.fullName}>
            <Text fontWeight="bold">{item.fullName}</Text>
          </View>
          <View>
            <Text>{item.description}</Text>
          </View>
          <View style={styles.language}>
            <Text>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.flexContainer}>
        <FlexItem text="stars" value={item.stargazersCount} />
        <FlexItem text="forks" value={item.forksCount} />
        <FlexItem text="review" value={item.reviewCount} />
        <FlexItem text="rating" value={item.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;

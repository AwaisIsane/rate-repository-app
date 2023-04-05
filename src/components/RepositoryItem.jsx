import { Image, View } from "react-native";
import { StyleSheet } from "react-native-web";
import { kNumFormatter } from "../utils";
import Text from "./Text";
import theme from "../theme";

const FlexItem = ({ text, value }) => {
  return (
    <View style={styles.flexContainerThreeItem}>
      <Text fontWeight="bold">{kNumFormatter(value)}</Text>
      <Text color="textSecondary">{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainerThree: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 300,
  },
  imageContainer: {
    marginRight: theme.margin.default,
  },
  flexContainerThreeItem: {
    paddingLeft: theme.padding.default2,
    paddingRight: theme.padding.default2,
    flexDirection: "column",
    alignItems: "center",
  },
  flexContainerOne: {
    display: "flex",
    flexDirection: "row",
  },
  imageAvtar: {
    width: 66,
    height: 58,
    padding: theme.padding.default,
    borderRadius: theme.borderRadius.image,
  },
  container: {
    padding: theme.padding.default,
    borderBottomColor: theme.colors.textSecondary,
    borderBottomWidth: 5,
    borderBottomStyle: "solid,",
  },
  flexContainerTwo: {
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
    padding: theme.padding.min,
    marginTop: theme.margin.default,
    marginBottom: theme.margin.default,
    borderRadius: theme.borderRadius.button,
    flexShrink: 1,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainerOne}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageAvtar}
            source={{ uri: item.ownerAvatarUrl }}
          />
        </View>
        <View style={styles.flexContainerTwo}>
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
      <View style={styles.flexContainerThree}>
        <FlexItem text="stars" value={item.stargazersCount} />
        <FlexItem text="forks" value={item.forksCount} />
        <FlexItem text="review" value={item.reviewCount} />
        <FlexItem text="rating" value={item.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;

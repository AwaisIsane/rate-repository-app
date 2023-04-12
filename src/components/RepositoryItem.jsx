import { Image, Pressable, StyleSheet, View } from "react-native";
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
  openInGithub: {
    padding: 15,
    backgroundColor: theme.colors.blue,
    borderRadius: 4,
    marginTop:theme.margin.default,
    maxWidth: 700,

  },
  openInGithubText: {
    color: theme.colors.white,
    alignSelf: "center",
  },
});

const RepositoryItem = ({ item, navigateToGithub }) => {
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
          <View style={styles.fullName} testID="fullName">
            <Text fontWeight="bold">{item.fullName}</Text>
          </View>
          <View testID="description">
            <Text>{item.description}</Text>
          </View>
          <View testID="language" style={styles.language}>
            <Text>{item.language}</Text>
          </View>
        </View>
      </View>
      <View testID="statsBar" style={styles.flexContainerThree}>
        <FlexItem testID="stars" text="stars" value={item.stargazersCount} />
        <FlexItem testID="forks" text="forks" value={item.forksCount} />
        <FlexItem testID="review" text="review" value={item.reviewCount} />
        <FlexItem testID="rating" text="rating" value={item.ratingAverage} />
      </View>
      {navigateToGithub && (
        <Pressable onPress={navigateToGithub} style={styles.openInGithub}>
          <Text style={styles.openInGithubText}>Open In Github</Text>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryItem;

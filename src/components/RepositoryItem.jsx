import { Image, View } from "react-native";
import { StyleSheet, Text as NativeText } from "react-native-web";
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
  flexItem: {
    flexGrow: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  flexContainerImage: {
    display: "flex",
    flexDirection: "row",
  },
  imageAvtar: {
    width: 66,
    height: 58,
  },
  repoItem: {
    padding: theme.padding.default,
  },
  textBox: {
    width: 0,
    flexGrow: 1,
    marginLeft: 'gutter',
  },
  fullName: {},
  description: {},
  language: {},
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.repoItem}>
      <View style={styles.flexContainerImage}>
        <View>
          <Image
            style={styles.imageAvtar}
            source={{ uri: item.ownerAvatarUrl }}
          />
        </View>
        <View style={styles.textBox}>
          <View>
            <Text>{item.fullName}</Text>
          </View>
          <View>
            <Text>{item.description}</Text>
          </View>
          <View>
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

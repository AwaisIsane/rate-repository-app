import { FlatList, StyleSheet, View } from "react-native";
import RepositoryItem from "./RepositoryItem";
import * as Linking from "expo-linking";
import { useParams } from "react-router-native";
import useRepositoriesSingle from "../hooks/useRepositorySingle";
import Text from "./Text";
import theme from "../theme";
import { format } from "date-fns";

const styles = StyleSheet.create({
  reviewItemContainer: {
    flexDirection: "row",
    margin:theme.margin.default
  },
  ratingContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    color: theme.colors.blue,
    borderColor: theme.colors.blue,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.margin.default,
  },
  reviewItem: {
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    rowGap: 5,
    marginTop: theme.margin.default,
  },
  ratingText: {
    color: theme.colors.blue,
  },
  separator: {
    height: 5,
    backgroundColor: "#D0D0D0",
  },
  mainContainer:{
    margin:10,
    padding:10
  }
});

const RepositoryInfo = ({ repository, navigateToGithub }) => {
  // Repository's information
  return (
    <View>
      <RepositoryItem
        item={repository}
        navigateToGithub={() => navigateToGithub(repository)}
      />
      <ItemSeparator />
    </View>
  );
};

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.reviewItemContainer}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{review.rating}</Text>
      </View>
      <View style={styles.reviewItem}>
        <Text fontWeight="bold">{review.user.username}</Text>
        <Text color="textSecondary">
          {format(new Date(review.createdAt), "dd.MM.yyyy")}
        </Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, reviews ,fetchMore} = useRepositoriesSingle({ id, first: 3 });
  const navigateToGithub = () => {
    console.log(repository);
    Linking.openURL(repository.url);
  };

  const onEndReach = () => {
    console.log("ss")
    fetchMore()
  };

  return (
    <View style={styles.mainContainer}>
      {repository && (
        <FlatList
          data={reviews}
          renderItem={({ item }) => <ReviewItem review={item} />}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={({ id }) => id}
          onEndReached={onEndReach}
          onEndReachedThreshold={0.3}
          ListHeaderComponent={() => (
            <RepositoryInfo
              repository={repository}
              navigateToGithub={navigateToGithub}
            />
          )}
        />
      )}
    </View>
  );
};

export default SingleRepository;

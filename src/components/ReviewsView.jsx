import { useMutation, useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";
import { Alert, FlatList, Pressable, StyleSheet, View } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { format } from "date-fns";
import { useNavigate } from "react-router-native";
import { DELETE_REVIEW } from "../graphql/mutations";

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
  },
  reviewItemContainer: {
    flexDirection: "row",
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: theme.margin.default,
  },
  reviewBtn: {
    padding: 15,
    backgroundColor: theme.colors.error,
    borderRadius: 4,
  },
  repoBtn: {
    padding: 15,
    backgroundColor: theme.colors.blue,
    borderRadius: 4,
  },
  btnText: {
    color: theme.colors.white,
    alignSelf: "center",
  },
});

const ReviewItem = ({ review, viewRepository, deleteReview }) => {
  return (
    <View style={styles.mainContainer}>
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
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => viewRepository({ id: review.repositoryId })}
          style={styles.repoBtn}
        >
          <Text style={styles.btnText}>View Repository</Text>
        </Pressable>
        <Pressable
          onPress={() => deleteReview({ id: review.id })}
          style={styles.reviewBtn}
        >
          <Text style={styles.btnText}>Delete Review</Text>
        </Pressable>
      </View>
    </View>
  );
};
const ItemSeparator = () => <View style={styles.separator} />;

const ReviewsView = () => {
  const navigate = useNavigate();
  const [mutate, result] = useMutation(DELETE_REVIEW);
  const { data, loading, refetch } = useQuery(ME, {
    variables: { includeReviews: true },
  });

  const reviews = loading ? [] : data.me.reviews.edges.map((e) => e.node);

  const viewRepository = ({ id }) => {
    navigate(`/repository/${id}`);
  };

  const  deleteReview = async ({ id }) => {
    await mutate({variables:{deleteReviewId:id}})
    refetch()
  };

  const CreateTwoButtonAlert = ({id}) =>
  Alert.alert('delete review', 'are you sure yu wanna delete', [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    {text: 'Delete', onPress: () => deleteReview({id:id})},
  ]);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => (
        <ReviewItem
          review={item}
          viewRepository={viewRepository}
          deleteReview={CreateTwoButtonAlert}
        />
      )}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={({ id }) => id}
    />
  );
};

export default ReviewsView;

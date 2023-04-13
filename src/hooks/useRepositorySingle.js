import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepositoriesSingle = (variables) => {
  const { data, error, loading, refetch, fetchMore } = useQuery(
    GET_REPOSITORY,
    {
      fetchPolicy: "cache-and-network",
      variables,
    }
  );
  const reviews = loading
    ? []
    : data.repository.reviews.edges.map((e) => e.node);
    

  const handleFetchMore = () => {
    console.log(data, "here");
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return { ...data, loading, reviews, refetch, fetchMore: handleFetchMore };
};

export default useRepositoriesSingle;

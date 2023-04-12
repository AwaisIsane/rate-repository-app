import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepositoriesSingle = ({ id }) => {
  const { data, error, loading, refetch } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { id },
  });
  const reviews = loading
    ? []
    : data.repository.reviews.edges.map((e) => e.node);

  return { ...data, loading, reviews, refetch };
};

export default useRepositoriesSingle;

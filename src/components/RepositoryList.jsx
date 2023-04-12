import { useNavigate } from "react-router-native";
import useRepositories from "../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const { repositories } = useRepositories();
  const navigate = useNavigate();
  const onPress = (id) => {
    navigate(`/repository/${id}`);
  };
  return (
    <RepositoryListContainer repositories={repositories} onPress={onPress} />
  );
};

export default RepositoryList;

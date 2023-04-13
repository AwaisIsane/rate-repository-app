import { useNavigate } from "react-router-native";
import useRepositories from "../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";
import { useState } from "react";
import { useDebounce } from "use-debounce";

const RepositoryList = () => {
  const [text, setText] = useState("");
  const [debValue] = useDebounce(text, 1000);
  const [selectedValue, setSelectedValue] = useState({
    orderBy: "CREATED_AT",
    orderDirection: "ASC",
    txt: "Latest repositories",
  });
  const { repositories, fetchMore } = useRepositories({
    orderBy: selectedValue.orderBy,
    orderDirection: selectedValue.orderDirection,
    searchKeyword: debValue,
    first: 4,
  });

  const textFieldChange = (value) => {
    setText(value);
  };
  const onValueChange = (value) => {
    if (value === "Latest repositories")
      setSelectedValue({
        orderBy: "CREATED_AT",
        orderDirection: "ASC",
        txt: "Latest repositories",
      });
    else if (value === "Highest rated repositories")
      setSelectedValue({
        orderBy: "RATING_AVERAGE",
        orderDirection: "DESC",
        txt: "Highest rated repositories",
      });
    else if (value === "Lowest rated repositories")
      setSelectedValue({
        orderBy: "RATING_AVERAGE",
        orderDirection: "ASC",
        txt: "Lowest rated repositories",
      });
  };
  const navigate = useNavigate();
  const onPress = (id) => {
    navigate(`/repository/${id}`);
  };

  const onEndReach = () => {
    console.log("You have reached the end of the list");
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      onPress={onPress}
      onEndReach={onEndReach}
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      textFieldChange={textFieldChange}
    />
  );
};

export default RepositoryList;

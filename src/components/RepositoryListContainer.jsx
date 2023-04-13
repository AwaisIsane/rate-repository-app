import { FlatList, Pressable, StyleSheet, View } from "react-native";
import RepositoryItem from "./RepositoryItem";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import theme from "../theme";
import { Searchbar } from "react-native-paper";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "#D0D0D0",
  },
  containerPicker: {
    borderColor: theme.colors.white,
    backgroundColor: theme.colors.textSecondary,
  },
  selectMenu: {
    borderColor: theme.colors.white,
    backgroundColor: theme.colors.background,
    height: 40,
  },
});

const PickerComponent = ({ selectedValue, onValueChange, textFieldChange }) => {
  //const textFieldChange = (value) =>console.log(value)

  return (
    <View>
      <Searchbar onChangeText={textFieldChange} />
      <View style={styles.containerPicker}>
        <Picker
          style={styles.selectMenu}
          selectedValue={selectedValue.txt}
          onValueChange={(itemValue, itemIndex) => onValueChange(itemValue)}
        >
          <Picker.Item
            label="Latest repositories"
            value="Latest repositories"
          />
          <Picker.Item
            label="Highest rated repositories"
            value="Highest rated repositories"
          />
          <Picker.Item
            label="Lowest rated repositories"
            value="Lowest rated repositories"
          />
        </Picker>
      </View>
    </View>
  );
};

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
  repositories,
  onPress,
  selectedValue,
  onValueChange,
  textFieldChange,
  onEndReach
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
  return (
    <FlatList
      data={repositoryNodes}
      ListHeaderComponent={
        <PickerComponent
          textFieldChange={textFieldChange}
          selectedValue={selectedValue}
          onValueChange={onValueChange}
        />
      }
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.3}
      renderItem={({ item }) => (
        <Pressable onPress={() => onPress(item.id)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
    />
  );
};

export default RepositoryListContainer;

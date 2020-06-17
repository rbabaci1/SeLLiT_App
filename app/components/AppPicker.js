import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
import { colors } from "../config/styles";

export default function AppPicker({
  icon,
  placeholder,
  items,
  selectedItem,
  onSelectItem,
}) {
  const [modalVisible, setModelVisible] = useState(false);

  const handleSelection = item => {
    setModelVisible(false);
    onSelectItem(item);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModelVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon}
              size={25}
              color={colors.medium}
            />
          )}

          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>

          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close Model" onPress={() => setModelVisible(false)} />

          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => handleSelection(item)}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ListItem from "../components/ListItem";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/IMG_1336.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/IMG_1336.jpg"),
  },
];

const MessagesScreen = () => {
  return (
    <FlatList
      data={messages}
      keyExtractor={message => message.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;

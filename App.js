import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import Icon from "./app/components/Icon";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <AccountScreen />
    // <Screen>
    //   <Text>{firstName}</Text>
    //   <TextInput
    //     keyboardType="numeric"
    //     clearButtonMode="always"
    //     secureTextEntry
    //     onChangeText={text => setFirstName(text)}
    //     placeholder="First Name"
    //     style={{
    //       borderBottomColor: "#ccc",
    //       borderBottomWidth: 1,
    //       fontSize: 24,
    //     }}
    //   />
    // </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});

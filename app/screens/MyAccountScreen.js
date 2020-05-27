import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import AccountListItem from "../components/AccountListItem";

const MyAccountScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/IMG_1336.jpg")}
        />

        <View>
          <AppText style={styles.name}>Rabah Babaci</AppText>
          <AppText style={styles.email}>RabahBabaci3@gmail.com</AppText>
        </View>
      </View>

      <AccountListItem
        iconName='format-list-bulleted'
        text='My Listings'
        bg='primary'
      />
      <AccountListItem iconName='email' text='My Messages' bg='secondary' />
      <AccountListItem iconName='logout' text='Log Out' bg='#ffe66d' />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginTop: 20,
    marginBottom: 30,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  email: {
    color: colors.medium,
  },
});

export default MyAccountScreen;

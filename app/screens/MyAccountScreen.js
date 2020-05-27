import React from "react";
import { View, StyleSheet, Image } from "react-native";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import AccountListItem from "../components/AccountListItem";

const MyAccountScreen = () => {
  return (
    <Screen>
      <View style={styles.userContainer}>
        <Image
          style={styles.image}
          source={require("../assets/IMG_1336.jpg")}
        />

        <View>
          <AppText>Rabah Babaci</AppText>
          <AppText style={styles.email}>RabahBabaci3@gmail.com</AppText>
        </View>
      </View>

      <AccountListItem iconName='format-list-bulleted' bgColor='primary'>
        My Listings
      </AccountListItem>
      <AccountListItem iconName='email' bgColor='secondary'>
        My Messages
      </AccountListItem>
      <AccountListItem iconName='logout' bgColor='yellow'>
        Log Out
      </AccountListItem>
    </Screen>
  );
};

const styles = StyleSheet.create({
  userContainer: {
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

import React from "react";
import { View, StyleSheet, Image } from "react-native";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import Icon from "../components/Icon";

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

      <Icon
        name='format-list-bulleted'
        size={25}
        backgroundColor='primary'
        iconColor='white'
      >
        My Listings
      </Icon>
      <Icon
        name='email'
        size={25}
        backgroundColor='secondary'
        iconColor='white'
      >
        My Messages
      </Icon>
      <Icon name='logout' size={25} backgroundColor='yellow' iconColor='white'>
        Log Out
      </Icon>
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

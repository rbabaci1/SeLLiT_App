import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import { Colors } from "react-native/Libraries/NewAppScreen";

const ListItem = ({ image, title, subTitle }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: Colors.medium,
  },
});

export default ListItem;

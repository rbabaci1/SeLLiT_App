import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

const Card = ({ image, title, subTitle }) => {
  return (
    <View style={styles.card}>
      <Image source={image} />

      <AppText>{title}</AppText>

      <AppText>{subTitle}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
});

export default Card;

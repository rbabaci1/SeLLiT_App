import React from "react";
import { Text } from "react-native";

import { text as textStyle } from "../config/styles";

const AppText = ({ children, style }) => {
  return <Text style={[textStyle, style]}>{children}</Text>;
};

export default AppText;

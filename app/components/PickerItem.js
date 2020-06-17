import React from "react";
import { TouchableOpacity } from "react-native";
import AppText from "./AppText";

export default function PickerItem({ onPress, label }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText>{label}</AppText>
    </TouchableOpacity>
  );
}

import { StyleSheet, Platform } from "react-native";

const platformStyle = Platform.select({
  ios: {
    fontSize: 20,
    fontFamily: "Avenir",
  },
  android: {
    fontSize: 18,
    fontFamily: "Roboto",
  },
});

const styles = StyleSheet.create({
  text: { color: "#fff", ...platformStyle },
});

export default styles;

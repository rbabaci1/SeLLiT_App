import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: "100%",
    paddingVertical: 16,
    borderRadius: 50,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default styles;

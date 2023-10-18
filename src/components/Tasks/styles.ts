import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    backgroundColor: '#262626',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333333',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8
  },
  text: {
    maxWidth: '95%',
    textAlign: "justify",
    color: '#F2F2F2',
  },
  textDisabled: {
    maxWidth: '90%',
    textAlign: "justify",
    color: '#808080',
  },
  trash: {
    width: 16,
    height: 16,
    objectFit: "contain",
  }
})
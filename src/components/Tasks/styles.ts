import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#262626',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333333',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 10,
    marginTop: 0,
  },
  text: {
    width: 220,
    flexWrap: "wrap",
    textAlign: "justify",
    color: '#F2F2F2',
    fontFamily: 'Inter_400Regular'
  },
  textDisabled: {
    width: 220,
    flexWrap: "wrap",
    textAlign: "justify",
    color: '#808080',
    fontFamily: 'Inter_400Regular'
  },
  trash: {
    width: 16,
    height: 16,
    objectFit: "contain",
  }
})
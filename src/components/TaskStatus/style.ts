import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskStatus: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
  },
  taskIndicator: {
    flexDirection: 'row',
    alignItems: "center",
    gap: 8
  },
  textCreated: {
    color: '#4EA8DE',
    fontSize: 16,
    fontFamily: 'Inter_700Bold'
  },
  numberIndicatorTask: {
    backgroundColor: '#333333',
    color: '#FFF',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 50,
    fontFamily: 'Inter_700Bold'
  },
  finishedTask: {
    color: '#8284FA',
    fontSize: 16,
    fontFamily: 'Inter_700Bold'
  }
})
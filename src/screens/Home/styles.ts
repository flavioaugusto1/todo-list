import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
    backgroundColor: '#1A1A1A',
  },
  header: {
    width: '100%',
    backgroundColor: "#0D0D0D",
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  wrap: {
    flex: 1,
    padding: 24,
    paddingBottom: 0,
    justifyContent: "center",
    marginTop: -100,
  },
  form: {
    flexDirection: "row",
    gap: 4,
    marginBottom: 32
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    borderRadius: 6,
    padding: 20,
    color: '#F2F2F2',
    borderWidth: 1,
    fontSize: 16
  },
  addTask: {
    padding: 20,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    justifyContent: "center"
  },
  taskIndicators: {
    width: '100%',
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderColor: '#333333'
  },
  finishedTask: {
    color: '#8284FA',
    backgroundColor: 'red'
  },
  listEmpty: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 68,
    gap: 16
  },
  titleListEmpty: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: '#808080'
  },
  textListEmpty: {
    textAlign: "center",
    fontSize: 15,
    color: '#808080'
  }
})
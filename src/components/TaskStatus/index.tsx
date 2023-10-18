import { View, Text } from "react-native"
import { styles } from "./style"

export function TaskStatus() {
  return (
    <View style={styles.taskStatus}>
      <View style={styles.taskIndicator}>
        <Text style={styles.textCreated}>Criadas</Text>
        <Text style={styles.numberIndicatorTask}>0</Text>
      </View>

      <View style={styles.taskIndicator}>
        <Text style={styles.finishedTask}>Concluídas</Text>
        <Text style={styles.numberIndicatorTask}>0</Text>
      </View>
    </View>
  )
}
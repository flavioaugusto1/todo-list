import { View, Text } from "react-native"
import { styles } from "./style"

type Props = {
  created: number,
  finished: number,
}

export function TaskStatus({ created, finished }: Props) {
  return (
    <View style={styles.taskStatus}>
      <View style={styles.taskIndicator}>
        <Text style={styles.textCreated}>Criadas</Text>
        <Text style={styles.numberIndicatorTask}>{created}</Text>
      </View>

      <View style={styles.taskIndicator}>
        <Text style={styles.finishedTask}>Concluídas</Text>
        <Text style={styles.numberIndicatorTask}>{finished} de {created}</Text>
      </View>
    </View>
  )
}
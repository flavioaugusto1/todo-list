import { View, Image, TextInput, TouchableOpacity, Text } from "react-native"
import { styles } from "./styles"
import { TaskStatus } from "../../components/TaskStatus"
import { Tasks } from "../../components/Tasks"

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/logo.png')}
        />
      </View>

      <View style={styles.wrap}>
        <View style={styles.form}>
          <TextInput
            placeholder="Adicione aqui a sua tarefa"
            placeholderTextColor='#808080'
            style={styles.input}
          />
          <TouchableOpacity
            style={styles.addTask}
          >
            <Image
              source={require('../../../assets/plus.png')}
            />
          </TouchableOpacity>
        </View>

        <TaskStatus />

        <Tasks />
      </View>
    </View>
  )
}
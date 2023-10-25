import { View, Image, TextInput, TouchableOpacity, FlatList, Alert, Text } from "react-native"
import { styles } from "./styles"
import { TaskStatus } from "../../components/TaskStatus"
import { Tasks } from "../../components/Tasks"
import { useState } from "react"

export function Home() {
  const [task, setTask] = useState<string[]>([])
  const [taskDesc, setTaskDesc] = useState('')
  const [taskCreated, setTaskCreated] = useState(0)
  const [taskFinished, setTaskFinished] = useState(0)
  
  function handleTaskAdd() {
    if (taskDesc == '') {
      return Alert.alert('Tarefa vazia', 'Para adicionar uma tarefa é necessário que preencha o campo.')
    }

    if (task.includes(taskDesc)) {
      return Alert.alert('Tarefa já existe', 'Você está tentando cadastrar uma tarefa que jáe existe.')
    }

    setTask(prevState => [...prevState, taskDesc])
    setTaskDesc('')
    setTaskCreated(prevState => prevState + 1)
  }

  function handleTaskFinished(selectedTask: string) {
    Alert.alert('Remover', 'Deseja remover essa tarefa?', [
      {
        text: 'Sim',
        onPress: () => {
          setTask(prevState => prevState.filter(task => (task !== selectedTask)))
          setTaskCreated(prevState => prevState - 1)
        }
      },
      {
        text: 'Não',
        onPress: () => {
          markedTask()
        },
        style: 'cancel'
      }
    ])
  }

  function markedTask() {
    setTaskFinished(prevState => prevState + 1)
  }

  function unMarkedTask() {
    setTaskFinished(prevState => prevState - 1)
  }

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
            onChangeText={setTaskDesc}
            value={taskDesc}
          />
          <TouchableOpacity
            style={styles.addTask}
            onPress={handleTaskAdd}
          >
            <Image
              source={require('../../../assets/plus.png')}
            />
          </TouchableOpacity>
        </View>

        <TaskStatus
          created={taskCreated}
          finished={taskFinished}
        />

        <FlatList
          data={task}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Tasks
              name={item}
              onRemove={() => handleTaskFinished(item)}
              markedTask={() => markedTask()}
              unMarkedTask={() => unMarkedTask()}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.listEmpty}>
              <Image source={require('../../../assets/clipboard.png')} />
              <View>
                <Text style={styles.titleListEmpty}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.textListEmpty}>Crie tarefas e organize seus itens a fazer</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  )
}
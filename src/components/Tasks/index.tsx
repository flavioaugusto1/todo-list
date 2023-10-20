import { View, Image, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'

type Props = {
  name: string,
  onRemove: () => void,
  markedTask: () => void,
  unMarkedTask: () => void
};

export function Tasks({ name, onRemove, markedTask, unMarkedTask }: Props) {
  const [checkboxState, setCheckboxState] = useState(true)
  const  [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  if(!fontLoaded){
    return null
  }

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={20}
        fillColor="#5E60CE"
        unfillColor="transparent"
        text={name}
        innerIconStyle={ checkboxState ? {borderColor: '#4EA8DE', borderWidth: 2} :  {borderColor: 'transparent'}}
        onPress={() => {
          setCheckboxState(!checkboxState)
          checkboxState ? markedTask() : unMarkedTask()
        }}

        textStyle={checkboxState ? styles.text : styles.textDisabled}
      />
      <TouchableOpacity onPress={() => {
        onRemove()
        if(!checkboxState){
          unMarkedTask()
        }
      }}>
        <Image
          source={require('../../../assets/trash.png')}
          style={styles.trash}
        />
      </TouchableOpacity>

    </View>
  )
}
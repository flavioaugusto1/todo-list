import { Container, Text, TextTypeStyleProps } from "./styles";
import { Delete } from "../Delete";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";

type Props = {
  name: string,
  onRemove: () => void,
  markedTask: () => void,
  unMarkedTask: () => void
  type?: TextTypeStyleProps
};

export function Tasks({ name, onRemove, markedTask, unMarkedTask, type = 'ENABLE' }: Props) {
  const [checkboxState, setCheckboxState] = useState(true)

  return (
    <Container>
      <BouncyCheckbox
        size={20}
        fillColor="#5E60CE"
        unfillColor="transparent"
        innerIconStyle={checkboxState ? { borderColor: '#4EA8DE', borderWidth: 2 } : { borderColor: 'transparent' }}
        onPress={() => {
          setCheckboxState(!checkboxState)
          checkboxState ? markedTask() : unMarkedTask()
        }}
      />

      {
        !checkboxState ?
          <Text
            type="DISABLED"
            style={{ textDecorationLine: "line-through" }}
          >
            {name}
          </Text> : <Text type={type}>{name}</Text>
      }

      <Delete
        onPress={() => {
          onRemove()
          if (!checkboxState) {
            unMarkedTask()
          }
        }}
      />

    </Container>
  )
}
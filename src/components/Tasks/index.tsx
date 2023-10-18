import { View, Text } from "react-native"
import { styles } from "./styles"
import BouncyCheckbox from "react-native-bouncy-checkbox";

export function Tasks() {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={20}
        fillColor="#4EA8DE"
        unfillColor="transparent"
        text="teste"
        iconStyle={{ borderColor: "blue" }}
        innerIconStyle={{ borderWidth: 2 }}
        onPress={(isChecked: boolean) => { }}
      />
    </View>
  )
}
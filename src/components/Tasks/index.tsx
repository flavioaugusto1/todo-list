import { View, Image } from "react-native"
import { styles } from "./styles"
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";

export function Tasks() {
  const [checkboxState, setCheckboxState] = useState(true)

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={20}
        fillColor="#4EA8DE"
        unfillColor="transparent"
        text="Integer urna interdum massa libero auctor neque turpis turpis semper."
        iconStyle={{ borderColor: "blue" }}
        innerIconStyle={{ borderWidth: 2 }}
        onPress={() => setCheckboxState(!checkboxState)}
        textStyle={checkboxState ? styles.text : styles.textDisabled}
      />
      <Image
        source={require('../../../assets/trash.png')}
        style={styles.trash}
      />
    </View>
  )
}
import { View, Text, Image } from "react-native"
import { styles } from "./styles"

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/logo.png')}
        />
      </View>
      <View style={styles.wrap}>
      </View>
    </View>
  )
}
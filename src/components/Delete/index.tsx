import { Container, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps

export function Delete({ ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon />
    </Container>
  )
}
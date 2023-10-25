import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import Trash from 'phosphor-react-native/src/icons/Trash'

export const Container = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
`

export const Icon = styled(Trash).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.GRAY_300
}))`
`;
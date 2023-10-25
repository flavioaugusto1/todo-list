import { StatusBar } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'

import { ThemeProvider } from 'styled-components';
import theme from './src/theme';

import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {
        fontLoaded ? <Home /> : <Loading />
      }
    </ThemeProvider>
  );
}
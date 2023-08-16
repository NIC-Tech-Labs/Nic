import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
  useFonts
} from '@expo-google-fonts/dm-sans'
import * as Navbar from 'expo-navigation-bar'
import { SafeAreaView, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { Login } from './src/screens/Login'
import { dark, light } from './src/theme'

export default function App() {
  const [Fonts] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold
  })

  if (!Fonts) {
    return null
  }

  return(
    <ThemeProvider
      theme={() => {
        if(light) {
          return Navbar.setBackgroundColorAsync('transparent')
        }

        if (dark) {
          return null
        }
      }}
    >
      {!Fonts ? (
        <SafeAreaView style={{ flex: 1 }} >
          <StatusBar backgroundColor="dark" animated />
        </SafeAreaView>
      ) : (
        <Login />
      )
      }
    </ThemeProvider>
  )
}
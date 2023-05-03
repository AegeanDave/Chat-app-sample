import { Slot } from 'expo-router'
import { useFonts } from 'expo-font'
import { NativeBaseProvider } from 'native-base'
import { theme } from '../styles'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    MontserratBold: require('../assets/fonts/Montserrat-Bold.ttf'),
    MontserratSemiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
    MontserratRegular: require('../assets/fonts/Montserrat-Regular.ttf'),
    MontserratLight: require('../assets/fonts/Montserrat-Light.ttf')
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NativeBaseProvider theme={theme}>
      <Slot />
    </NativeBaseProvider>
  )
}

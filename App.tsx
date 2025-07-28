import {
  useFonts,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_800ExtraBold
} from "@expo-google-fonts/poppins"

import { StatusBar } from "expo-status-bar"
import { Home } from "@/app/home"

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_800ExtraBold
  })

if (!fontsLoaded) {
  return null
}

  return (
  <>
    < StatusBar style="light" backgroundColor="transparent" translucent />
    <Home />
  </>
  )
}

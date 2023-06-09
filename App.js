import { View} from 'react-native';
import Main from './components/Main'
import Styles from './components/Styles'
import { useFonts } from 'expo-font';
import { Anton_400Regular } from '@expo-google-fonts/anton';
import { Dosis_400Regular } from '@expo-google-fonts/dosis';


export default function App() {
  const [fontsLoaded] = useFonts({
    'AntonRegular': Anton_400Regular,
    'DosisRegular': Dosis_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={Styles.container_App}>
      <Main/>
    </View>
  );
}
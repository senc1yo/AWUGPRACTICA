import { View} from 'react-native';
import Main from './components/Main'
import Styles from './components/Styles'
import { useFonts } from 'expo-font';
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';

export default function App() {
  const [fontsLoaded] = useFonts({
    'AmaticSC-Regular': AmaticSC_400Regular,
    'AmaticSC-Bold': AmaticSC_700Bold,
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
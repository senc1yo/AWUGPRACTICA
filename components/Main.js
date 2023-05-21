import { Text, Pressable, View, SafeAreaView } from 'react-native';
import { Category_Sets } from './Category_Sets';
import { Category_Parts } from './Category_Parts';
import { Category_Minifigs } from './Category_Minifigs';
import { Details } from './Details';
import { SetsMinifig } from './SetsMinifig';
import { DetailsMinifig } from './DetailsMinifig';
import { AlternateConst } from './AlternateConst';
import { MinifigParts } from './MinifigParts';
import { DetailsPart } from './DetailsPart';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Styles from './Styles';
import CircleSVG from "../assets/CircleSVG.jsx";

const Stack = createStackNavigator();

export default Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{ 
        headerShown: true,
         headerTitleStyle: {fontFamily: 'AmaticSC-Bold', fontSize: 30, color: '#F4E9DC'},
         headerStyle:{backgroundColor: "#494949"}
          }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sets" component={Category_Sets} />
        <Stack.Screen name="Parts" component={Category_Parts} />
        <Stack.Screen name="Minifigs" component={Category_Minifigs} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="DetailsMinifig" component={DetailsMinifig} />
        <Stack.Screen name="SetsMinifig" component={SetsMinifig} />
        <Stack.Screen name="AlternateConst" component={AlternateConst} />
        <Stack.Screen name="MinifigParts" component={MinifigParts} />
        <Stack.Screen name="DetailsPart" component={DetailsPart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={Styles.container_Main}>
    
    <CircleSVG  style={Styles.bgCircle}/>
    <CircleSVG  style={Styles.bgCircle2}/>
      <View>
        <Text style= {Styles.title_Main_Intro}>{'¿Por dónde empezamos?'}</Text>
      </View>
      <Pressable
        onPress={() => navigation.navigate('Sets')}
        style={Styles.option_Main}>
        <Text style={Styles.title_Main}>Sets</Text>
        <Text style={Styles.title_Low}>información sobre los sets de lego</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Parts')}
        style={Styles.option_Main}>
        <Text style={Styles.title_Main}>Parts</Text>
        <Text style={Styles.title_Low}>partes de sets de lego</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Minifigs')}
        style={Styles.option_Main}>
        <Text style={Styles.title_Main}>Minifigs</Text>
        <Text style={Styles.title_Low}>información sobre las figuras de lego</Text>
      </Pressable>
   </SafeAreaView>
  );
};

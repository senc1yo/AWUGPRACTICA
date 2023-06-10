import {Text, Pressable, View, SafeAreaView, Button} from 'react-native';
import { Category_Sets } from './Category_Sets';
import { Category_Parts } from './Category_Parts';
import { Category_Minifigs } from './Category_Minifigs';
import { Details } from './Details';
import { SetsMinifig } from './SetsMinifig';
import { DetailsMinifig } from './DetailsMinifig';
import { AlternateConst } from './AlternateConst';
import { MinifigParts } from './MinifigParts';
import { DetailsPart } from './DetailsPart';
import {Favorites_Sets} from "./Favorites_Sets";
import MainOption from "./MainOption";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Styles from './Styles';
import CircleSVG from "../assets/CircleSVG.jsx";
import FavsButton from "./FavsButton";

const Stack = createStackNavigator();

export default Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={({ navigation }) => ({
                    headerShown: true,
                    headerTitleStyle: {fontFamily: 'AmaticSC-Bold', fontSize: 30, color: '#F4E9DC'},
                    headerStyle:{backgroundColor: "#494949"},
                    headerRight: () => (
                        <FavsButton navigation={navigation} onPress={() => navigation.navigate("FavoritesSets")} />
                    ),
                })}>
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
                <Stack.Screen name="FavoritesSets" component={Favorites_Sets} />
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
            <MainOption navigation={navigation} title="Sets" subtitle="información sobre los sets de lego" />
            <MainOption navigation={navigation} title="Parts" subtitle="partes de sets de lego" />
            <MainOption navigation={navigation} title="Minifigs" subtitle="información sobre las figuras de lego" />
        </SafeAreaView>
    );
};

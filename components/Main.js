import {Text, Pressable, View, SafeAreaView, Button, TouchableWithoutFeedback} from 'react-native';
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
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Styles from './Styles';
import FavsButton from "./FavsButton";
import BackButton from "./BackButton"
import RectangleTitleNav from "../assets/RectangleTitleNav";

const Stack = createStackNavigator();

const ThemeHeader = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "#3B5BA5",
    },
};


export default Main = () => {
    return (
        <NavigationContainer theme={ThemeHeader}>
            <Stack.Navigator
                screenOptions={({ navigation }) => ({
                    headerShown: true,
                    headerTitleStyle: {fontFamily: 'AntonRegular', fontSize: 30, color: '#000'},
                    headerStyle:{backgroundColor: "#3B5BA5"},
                    headerRight: () => (
                        <FavsButton navigation={navigation} onPress={() => navigation.navigate("FavoritesSets")} />
                    ),
                })}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Sets" component={Category_Sets} options={({ navigation }) => ({ title: "Sets de Lego",  headerTitleAlign: 'center', headerBackground: () => (
                <View style={{ justifyContent: 'center', alignItems: 'center', top: 40 }}>
                        <RectangleTitleNav width={200} height={40}/>
                </View>
                    ),   headerLeft: () => (
                        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                            <BackButton/>
                        </TouchableWithoutFeedback>
                    ), })} />
                <Stack.Screen name="Parts" component={Category_Parts} options={({ navigation }) => ({ title: "Partes de Lego",   headerTitleAlign: 'center', headerBackground: () => (
                        <View style={{ justifyContent: 'center', alignItems: 'center', top: 40 }}>
                            <RectangleTitleNav width={200} height={40}/>
                        </View>
                    ),   headerLeft: () => (
                        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                            <BackButton/>
                        </TouchableWithoutFeedback>
                    ), })} />
                <Stack.Screen name="Minifigs" component={Category_Minifigs} options={({ navigation }) => ({ title: "Minifiguras",   headerTitleAlign: 'center', headerBackground: () => (
                        <View style={{ justifyContent: 'center', alignItems: 'center', top: 40 }}>
                            <RectangleTitleNav width={400} height={40}/>
                        </View>
                    ),   headerLeft: () => (
                        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                            <BackButton/>
                        </TouchableWithoutFeedback>
                    ), })} />
                <Stack.Screen name="Details" component={Details} options={({ navigation }) => ({ title: "Detalles",   headerTitleAlign: 'center', headerBackground: () => (
                        <View style={{ justifyContent: 'center', alignItems: 'center', top: 40 }}>
                            <RectangleTitleNav width={200} height={40}/>
                        </View>
                    ),   headerLeft: () => (
                        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                            <BackButton/>
                        </TouchableWithoutFeedback>
                    ), })} />
                <Stack.Screen name="DetailsMinifig" component={DetailsMinifig} options={({ navigation }) => ({ title: "Detalles Mini",   headerTitleAlign: 'center', headerBackground: () => (
                        <View style={{ justifyContent: 'center', alignItems: 'center', top: 40 }}>
                            <RectangleTitleNav width={200} height={40}/>
                        </View>
                    ),   headerLeft: () => (
                        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                            <BackButton/>
                        </TouchableWithoutFeedback>
                    ), })} />
                <Stack.Screen name="SetsMinifig" component={SetsMinifig} options={({ navigation }) => ({ title: "Donde aparece",  headerTitleAlign: 'center', headerBackground: () => (
                        <View style={{ justifyContent: 'center', alignItems: 'center', top: 40 }}>
                            <RectangleTitleNav width={200} height={40}/>
                        </View>
                    ),   headerLeft: () => (
                        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                            <BackButton/>
                        </TouchableWithoutFeedback>
                    ), })} />
                <Stack.Screen name="AlternateConst" component={AlternateConst} options={({ navigation }) => ({ title: "Alternativas",  headerTitleAlign: 'center', headerBackground: () => (
                        <View style={{ justifyContent: 'center', alignItems: 'center', top: 40 }}>
                            <RectangleTitleNav width={200} height={40}/>
                        </View>
                    ),   headerLeft: () => (
                        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                            <BackButton/>
                        </TouchableWithoutFeedback>
                    ), })} />
                <Stack.Screen name="MinifigParts" component={MinifigParts} options={({ navigation }) => ({ title: "Partes Mini",   headerTitleAlign: 'center', headerBackground: () => (
                        <View style={{ justifyContent: 'center', alignItems: 'center', top: 40 }}>
                            <RectangleTitleNav width={200} height={40}/>
                        </View>
                    ),   headerLeft: () => (
                        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                            <BackButton/>
                        </TouchableWithoutFeedback>
                    ), })}/>
                <Stack.Screen name="DetailsPart" component={DetailsPart} options={({ navigation }) => ({ title: "Detalles Parte",   headerTitleAlign: 'center', headerBackground: () => (
                        <View style={{ justifyContent: 'center', alignItems: 'center', top: 40 }}>
                            <RectangleTitleNav width={200} height={40}/>
                        </View>
                    ),   headerLeft: () => (
                        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                            <BackButton/>
                        </TouchableWithoutFeedback>
                    ), })}/>
                <Stack.Screen name="FavoritesSets" component={Favorites_Sets} options={({ navigation }) => ({ title: "Tus favoritos",   headerTitleAlign: 'center', headerBackground: () => (
                        <View style={{ justifyContent: 'center', alignItems: 'center', top: 40 }}>
                            <RectangleTitleNav width={200} height={40}/>
                        </View>
                    ),   headerLeft: () => (
                        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                            <BackButton/>
                        </TouchableWithoutFeedback>
                    ), })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={Styles.container_Main}>
            <View>
                <Text style= {Styles.title_Main_Intro}>{'¿Por dónde empezamos?'}</Text>
            </View>
            <MainOption navigation={navigation} title="Sets" subtitle="información sobre los sets de lego" />
            <MainOption navigation={navigation} title="Minifigs" subtitle="información sobre las figuras de lego" />
            <MainOption navigation={navigation} title="Parts" subtitle="partes de sets de lego" />
        </SafeAreaView>
    );
};

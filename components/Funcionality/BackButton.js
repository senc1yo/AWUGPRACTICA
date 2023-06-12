import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButtonSVG from "../../assets/BackButtonSVG";

const BackButton = () => {
    const navigation = useNavigation();
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', top: 7 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <BackButtonSVG width={40} height={20}/>
                <Text style={ {fontFamily: 'AntonRegular', fontSize: 10, alignSelf: "center"}}>Back</Text>
            </TouchableOpacity>
            
        </View>
    );
};

export default BackButton;

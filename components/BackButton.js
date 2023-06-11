import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButtonSVG from "../assets/BackButtonSVG";

const BackButton = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackButtonSVG width={30} height={20}/>
        </TouchableOpacity>
    );
};

export default BackButton;

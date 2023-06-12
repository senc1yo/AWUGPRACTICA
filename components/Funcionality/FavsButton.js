import React from 'react';
import {Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from '../Styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

const FavsButton = ({ navigation, onPress }) => {
    return (
        <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={onPress}
        >
            <Text style={Styles.text_favoritos}>Favoritos</Text>
            <Icon name="star" size={30} color="#fbe413" />
        </TouchableOpacity>
    );
};

export default FavsButton;

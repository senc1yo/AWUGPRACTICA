import * as React from 'react';
import { useState, useEffect } from 'react';
import {SafeAreaView, View, Text, Image, Pressable, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Styles from './Styles';
import CardRed from "../assets/CardRed";
import imagenotfound from '../assets/imagenotfound.jpg'; // Importa la imagen local


const Dev_Height = Dimensions.get('window').height;
const Dev_Width = Dimensions.get('window').width;


const Product = ({ item }) => {
    const navigation = useNavigation();
    const [themeName, setThemeName] = useState('');

    useEffect(() => {
        fetch(`https://rebrickable.com/api/v3/lego/themes/${item.theme_id}/`, {
            headers: {
                Authorization: 'key 59fb97e709c9d9d94e40c5c62c838337',
            },
        })
            .then((response) => response.json())
            .then((data) => setThemeName(data.name))
            .catch((error) => console.error(error));
    }, []);

    const handlePress = () => {
        console.log(item);
        navigation.navigate('Details', { item: item });
    };

    return (

        <View style={{flexDirection: 'column', width: Dev_Width, height: Dev_Height / 2, top: Dev_Height * 0.15}}>
            <Pressable onPress={handlePress}>
                <CardRed style={Styles.frameImage} />
                {item.set_img_url ? (
                    <Image
                        style={Styles.illustrationImage}
                        source={{ uri: item.set_img_url }}
                        resizeMode="cover"
                    />
                ) : (
                    <Image
                        style={Styles.illustrationImage}
                        source={imagenotfound}
                        resizeMode="cover"
                    />
                )}
                <View style={{position: "absolute", top: "2%", marginLeft: "12%", width: Dev_Width * 0.6, zIndex: 2, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                    <Text style={{textAlign: 'left', textAlignVertical: 'top', zIndex: 2, fontFamily:'DosisRegular',fontSize: 12, color: 'black'}}>{themeName}</Text>
                    <Text style={{textAlign: 'right', textAlignVertical: 'top', zIndex: 2, fontFamily:'DosisRegular',fontSize: 12, color: 'black'}}>{item.year}</Text>
                </View>
                <View style={{position: "absolute", top: 55, marginLeft: 50, maxWidth: Dev_Width -130, zIndex:2, height: 50, flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap'}}>
                    <Text style={{textAlign: 'left', height: 30, maxWidth: Dev_Width -130, fontFamily:'DosisRegular',fontSize: 30, color: 'black'}} adjustsFontSizeToFit numberOfLines={1}>{item.name}</Text>
                </View>
                <View style={{position: "absolute", top: "87%", alignSelf: 'center', zIndex: 2, flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center', textAlignVertical: 'bottom', fontFamily:'DosisRegular',fontSize: 12, color:'#000000'}}>{item.set_num}</Text>
                </View>
            </Pressable>
        </View>

    );
};
export default Product;

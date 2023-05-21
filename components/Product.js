import * as React from 'react';
import { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from 'react-native-vector-icons';

import Styles from './Styles';
import SvgComponent from '../assets/SvgComponent.jsx';
import LogoLego from '../assets/LogoLego.jsx';
import imagenotfound from '../assets/imagenotfound.jpg'; // Importa la imagen local

const Product = ({ item }) => {
  const navigation = useNavigation();
  const [themeName, setThemeName] = useState('');

  useEffect(() => {
    fetch(`https://rebrickable.com/api/v3/lego/themes/${item.theme_id}/`, {
      headers: {
        Authorization: 'key 01e5a15acdb513d68569b8f03d12fcf5',
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
    <Pressable onPress={handlePress}>
      <SafeAreaView style={Styles.contanier}>
        <View style={Styles.middlebar}>
          <SvgComponent style={Styles.frameImage} />
          <LogoLego style={Styles.frameLogo} />
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
        </View>
        <View style={Styles.upper_text_view}>
          <Text style={Styles.low_text}>{themeName}</Text>
          <AntDesign name="" size={24} style={Styles.cardName} />
          <Text style={Styles.name_of_song_Text1}>{item.year}</Text>
        </View>
        <View style={Styles.middle_text_view}>
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={Styles.theme_name}>
            {item.name}
          </Text>
        </View>
        <View style={Styles.bot_text_view}>
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={Styles.theme_name}>
            {item.set_num}
          </Text>
        </View>
      </SafeAreaView>
    </Pressable>
  );
};
export default Product;

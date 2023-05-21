import * as React from 'react';
import { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  View,
  Text,
  Image,
  Linking
} from 'react-native';
import { AntDesign } from 'react-native-vector-icons';

import Styles from './Styles';
import SvgComponent from '../assets/SvgComponent.jsx';
import LogoLego from '../assets/LogoLego.jsx';
import imagenotfound from '../assets/imagenotfound.jpg'; // Importa la imagen local

const ProductAlternateBuilds = ({ item }) => {
  const handlePress = () => {
    Linking.openURL(item.moc_url)
    //navigation.navigate('Details', { item: item });
  };

  return (
    <Pressable onPress={handlePress}>
      <SafeAreaView style={Styles.contanier}>
        <View style={Styles.upper_text_view}>
          <Text style={Styles.low_text}>Alternate Construction</Text>
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

        <View style={Styles.middlebar}>
          <LogoLego style={Styles.frameLogo} />
          <SvgComponent style={Styles.frameImage} />

          {item.moc_img_url ? (
            <Image
              style={Styles.illustrationImage}
              source={{ uri: item.moc_img_url }}
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
export default ProductAlternateBuilds;

import * as React from 'react';
import { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  View,
  Text,
  Image, Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Dev_Height = Dimensions.get('window').height;
const Dev_Width = Dimensions.get('window').width;

import Styles from './Styles';
import imagenotfound from '../assets/imagenotfound.jpg';
import CardWhite from "../assets/CardWhite"; // Importa la imagen local

const ProductParts = ({ item }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    console.log(item);
    navigation.navigate('DetailsPart', { item: item });
  };

  return (
      <View style={{flexDirection: 'column', width: Dev_Width, height: Dev_Height / 2, top: Dev_Height * 0.15}}>
        <Pressable onPress={handlePress}>
          <CardWhite style={Styles.frameImage} />
          {item.part_img_url ? (
              <Image
                  style={Styles.illustrationImage}
                  source={{ uri: item.part_img_url }}
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
            <Text style={{textAlign: 'left', textAlignVertical: 'top', zIndex: 2, fontFamily:'AntonRegular',fontSize: 12, color: 'black'}}>Parte</Text>
            <Text style={{textAlign: 'right', textAlignVertical: 'top', zIndex: 2, fontFamily:'AntonRegular',fontSize: 12, color: 'black'}}>{item.year}</Text>
          </View>
          <View style={{position: "absolute", top: 55, marginLeft: 50, maxWidth: Dev_Width -110, zIndex:2, height: 50, flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap'}}>
            <Text style={{textAlign: 'left', height: 30, maxWidth: Dev_Width -110, fontFamily:'AntonRegular',fontSize: 30, color: 'black'}} adjustsFontSizeToFit numberOfLines={1}>{item.name}</Text>
          </View>
          <View style={{position: "absolute", top: "87%", alignSelf: 'center', zIndex: 2, flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', textAlignVertical: 'bottom', fontFamily:'AntonRegular',fontSize: 12, color:'#000000'}}>{item.set_num}</Text>
          </View>
        </Pressable>
      </View>
  );
};
export default ProductParts;

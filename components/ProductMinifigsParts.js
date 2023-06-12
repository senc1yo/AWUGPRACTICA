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
import { AntDesign } from 'react-native-vector-icons';
import CardHolder from "../assets/CardHolder";
import Styles from './Styles';
import SvgComponent from '../assets/SvgComponent.jsx';
import LogoLego from '../assets/LogoLego.jsx';
import imagenotfound from '../assets/imagenotfound.jpg'; // Importa la imagen local
const Dev_Height = Dimensions.get('window').height;
const Dev_Width = Dimensions.get('window').width;

const ProductMinifigsParts = ({ item }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    console.log(item);
    navigation.navigate('MinifigParts', { item: item });
  };

  return (
      <View style={{flexDirection: 'column', width: Dev_Width, height: Dev_Height / 2, top: Dev_Height * 0.15}}>
        <Pressable onPress={handlePress}>
          <CardHolder style={Styles.frameImage} />
          {item.part.part_img_url ? (
              <Image
                  style={Styles.illustrationImage}
                  source={{ uri: item.part.part_img_url }}
                  resizeMode="cover"
              />
          ) : (
              <Image
                  style={Styles.illustrationImage}
                  source={imagenotfound}
                  resizeMode="cover"
              />
          )}
          <View style={{position: "absolute", top: "2%", marginLeft: "15%", width: Dev_Width * 0.6, zIndex: 2, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
            <Text style={{textAlign: 'right', textAlignVertical: 'top', zIndex: 2, fontFamily:'AntonRegular',fontSize: 12, color: 'red'}}>{item.part.year_from}</Text>
          </View>
          <View style={{position: "absolute", top: 55, marginLeft: 50, zIndex:2, height: 50, flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap'}}>
            <Text style={{textAlign: 'left', maxWidth: Dev_Width -20, height: 30, fontFamily:'AntonRegular',fontSize: 30, color: 'black'}} adjustsFontSizeToFit numberOfLines={1}>{item.name}</Text>
          </View>
          <View style={{position: "absolute", top: "87%", alignSelf: 'center', zIndex: 2, flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', textAlignVertical: 'bottom', fontFamily:'AntonRegular',fontSize: 12, color:'#000000'}}>{item.set_num}</Text>
          </View>
        </Pressable>
      </View>

  );
};
export default ProductMinifigsParts;

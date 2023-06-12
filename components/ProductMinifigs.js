import * as React from 'react';
import {useEffect, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  View,
  Text,
  Image, Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Styles from './Styles';
import imagenotfound from '../assets/imagenotfound.jpg';
import CardYellow from "../assets/CardYellow";
const Dev_Height = Dimensions.get('window').height;
const Dev_Width = Dimensions.get('window').width;

const ProductMinifigs = ({ item }) => {
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
    navigation.navigate('DetailsMinifig', { item: item });
  };

  return (

      <View style={{flexDirection: 'column', width: Dev_Width, height: Dev_Height / 2, top: Dev_Height * 0.15}}>
        <Pressable onPress={handlePress}>
          <CardYellow style={Styles.frameImage} />
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
            <Text style={{textAlign: 'left', textAlignVertical: 'top', zIndex: 2, fontFamily:'AntonRegular',fontSize: 12, color: 'black'}}>{themeName}</Text>
            <Text style={{textAlign: 'right', textAlignVertical: 'top', zIndex: 2, fontFamily:'AntonRegular',fontSize: 12, color: 'black'}}>Número de partes: {item.num_parts}</Text>
          </View>
          <View style={{position: "absolute", top: 47, marginLeft: 50, maxWidth: Dev_Width -130, zIndex:2, height: 50, flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap'}}>
            <Text style={{textAlign: 'left', height: 30, maxWidth: Dev_Width -130, fontFamily:'AntonRegular',fontSize: 30, color: 'black'}} adjustsFontSizeToFit numberOfLines={2}>{item.name}</Text>
          </View>
          <View style={{position: "absolute", top: "87%", alignSelf: 'center', zIndex: 2, flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', textAlignVertical: 'bottom', fontFamily:'AntonRegular',fontSize: 12, color:'#000000'}}>{item.set_num}</Text>
          </View>
        </Pressable>
      </View>

  );
};
export default ProductMinifigs;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Styles from '../Styles';
import imagenotfound from '../../assets/imagenotfound.jpg';
export const DetailsPart = ({ route }) => {
  console.log(route.params.item);
  const item = route.params.item;
  const navigation = useNavigation();

  const handlePress = () => {
    console.log(item);
    navigation.navigate('SetsPart', { item: item });
  };

  return (
    <SafeAreaView style={Styles.container_Main}>
      <View style={styles.container}>        
        <View style={Styles.detailsCard}>
        <Text style={styles.textTitle}>Información de la parte</Text>
          {item.part_img_url ? (
            <Image
              style={styles.imageDet}
              source={{ uri: item.part_img_url }}
              resizeMode="cover"
            />
          ) : (
            <Image
              style={styles.imageDet}
              source={imagenotfound}
              resizeMode="cover"
            />
          )}
          <Text adjustsFontSizeToFit numberOfLines={2} style={styles.text}>
            Nombre: {item.name}
          </Text>
          <Text style={styles.text}>Nº Serie de parte: {item.part_num}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#3B5BA5',
  },
  imageDet: {
    position: 'relative',
    width: 200,
    height: 200,
    borderRadius: 25,
    
    justifyContent: 'center',
    alignSelf: 'center',
  },
  altContainer: {
    marginTop: 20,
    position: 'relative',
    width: 200,
    height: 50,
    backgroundColor: '#E85E56',
    borderRadius: 25,
    alignSelf: 'center',
  },
  text: {
    position: 'relative',
    fontFamily: 'DosisRegular',
    fontSize: 20,
    textAlign: 'center',
  },
  textTitle: {
    position: 'relative',
    fontFamily: 'DosisRegular',
    fontSize: 30,
    textAlign: 'center',
    color: 'black'
  },
});

export default DetailsPart;

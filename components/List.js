import {
  TextInput,
  View,
  ActivityIndicator,
  FlatList,
  Dimensions,
} from 'react-native';
import { useRef, useEffect } from 'react';


const { width } = Dimensions.get('window');

import Styles from './Styles';
import Product from './Product';

export default List = ({ results, onSearch }) => {
  const flatListRef = useRef(null);

  useEffect(() => {
    if (onSearch) {
      onSearch(() => {
        if (flatListRef.current) {
          //Volvemos al principio al realizar la búsqueda. TODO Mirar como volver al principio con cada cambio
          flatListRef.current.scrollToOffset({ offset: 0 }); 
        }
      });
    }
  }, [onSearch]);

  return (
    <FlatList
      ref={flatListRef}
      style={Styles.flatList_Category}
      data={results}
      horizontal
      snapToAlignment="center"
      decelerationRate={'fast'}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <Product item={item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={Styles.spacing_Category} />}
    />
  );
};

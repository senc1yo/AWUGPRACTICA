import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import ListMinifigsParts from './ListMinifigsParts';
import CircleSVG from '../assets/CircleSVG.jsx';
export const MinifigParts = ({ route }) => {
  const [minifigPart, setMinifigPart] = useState(null);
  const item = route.params.item;
  const [scrollToTop, setScrollToTop] = useState(null);

  useEffect(() => {
    fetch(
      `https://rebrickable.com/api/v3/lego/minifigs/${item.set_num}/parts/`,
      {
        headers: {
          Authorization: 'key 01e5a15acdb513d68569b8f03d12fcf5',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setMinifigPart(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={Styles.container_Category}>
    <CircleSVG style={Styles.bgCircle} />
    <CircleSVG style={Styles.bgCircle2} />
      {minifigPart && minifigPart.length > 0 ? (
        <ListMinifigsParts results={minifigPart} onSearch={setScrollToTop} />
      ) : (
        <Text style={{ textAlign: 'center' }}>
          No existen datos de las partes
        </Text>
      )}
    </View>
  );
};

export default MinifigParts;

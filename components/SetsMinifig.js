import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import ListProducts from "./ListProducts";
export const SetsMinifig = ({ route }) => {
  const [minifigSet, setMinifigSet] = useState(null);
  const item = route.params.item;
  const [scrollToTop, setScrollToTop] = useState(null);

  useEffect(() => {
    fetch(
      `https://rebrickable.com/api/v3/lego/minifigs/${item.set_num}/sets/`,
      {
        headers: {
          Authorization: 'key 01e5a15acdb513d68569b8f03d12fcf5',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setMinifigSet(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={Styles.container_Category}>
      {minifigSet && minifigSet.length > 0 ? (
        <ListProducts results={minifigSet} onSearch={setScrollToTop} productType="product" />
      ) : (
        <Text style={{ textAlign: 'center' }}>
          No existen builds alternativas
        </Text>
      )}
    </View>
  );
};

export default SetsMinifig;

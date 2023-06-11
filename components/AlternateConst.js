import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import ListProducts from "./ListProducts";
export const AlternateConst = ({ route }) => {
  const [altBuilds, setAltBuilds] = useState(null);
  const item = route.params.item;
  const [scrollToTop, setScrollToTop] = useState(null);

  useEffect(() => {
    fetch(
      `https://rebrickable.com/api/v3/lego/sets/${item.set_num}/alternates/`,
      {
        headers: {
          Authorization: 'key 01e5a15acdb513d68569b8f03d12fcf5',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setAltBuilds(data.results))
      .catch((error) => console.error(error));
  }, [item.set_num]);

  return (
    <View style={Styles.container_Category}>
      {altBuilds && altBuilds.length > 0 ? (
        <ListProducts results={altBuilds} onSearch={setScrollToTop} productType="alternateBuilds" />
      ) : (
        <Text style={{ textAlign: 'center', fontFamily: 'AntonRegular', alignSelf: 'center', fontSize: 50, color: '#F4E9DC' }}>
          No existen builds alternativas :(
        </Text>
      )}
    </View>
  );
};

export default AlternateConst;

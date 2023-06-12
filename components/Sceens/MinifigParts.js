import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, TextInput } from 'react-native';
import ListProducts from "../Funcionality/ListProducts";
import Styles from '../Styles';
import Loading from "../Loading";

export const MinifigParts = ({ route }) => {
  const [minifigPart, setMinifigPart] = useState(null);
  const item = route.params.item;
  const [scrollToTop, setScrollToTop] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const onRender = useCallback(() => {
    console.log("La lista se ha renderizado");
    setLoading(false);
  }, []);
  
  useEffect(() => {
    fetch(
      `https://rebrickable.com/api/v3/lego/minifigs/${item.set_num}/parts/`,
      {
        headers: {
          Authorization: 'key 59fb97e709c9d9d94e40c5c62c838337',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setMinifigPart(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
      <View style={Styles.container_Category}>
        {minifigPart && minifigPart.length > 0 ? (
            <ListProducts
                results={minifigPart}
                onSearch={setScrollToTop}
                productType="minifigsParts"
            />
        ) : loading ? (
            <Loading />
        ) : (
            <Text style={{ textAlign: "center" }}>
              No existen datos de las partes
            </Text>
        )}
      </View>

);
};

export default MinifigParts;

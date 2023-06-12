import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, TextInput } from 'react-native';
import ListProducts from "../Funcionality/ListProducts";
import Styles from "../Styles";
import Loading from "../Loading";
export const SetsMinifig = ({ route }) => {
  const [minifigSet, setMinifigSet] = useState(null);
  const item = route.params.item;
  const [scrollToTop, setScrollToTop] = useState(null);
  const [loading, setLoading] = useState(true);

  const onRender = useCallback(() => {
    console.log("La lista se ha renderizado");
    setLoading(false);
  }, []);
  
  useEffect(() => {
    fetch(
      `https://rebrickable.com/api/v3/lego/minifigs/${item.set_num}/sets/`,
      {
        headers: {
          Authorization: 'key 59fb97e709c9d9d94e40c5c62c838337',
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
            <ListProducts
                results={minifigSet}
                onSearch={setScrollToTop}
                productType="product"
            />
        ) : loading ? (
            <Loading />
        ) : (
            <Text style={{ textAlign: "center" }}>
              No existen datos de los sets donde aparece
            </Text>
        )}
      </View>
  );
};

export default SetsMinifig;

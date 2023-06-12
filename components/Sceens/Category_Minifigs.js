import {
  TextInput,
  View,
  ActivityIndicator,
  FlatList,
  Dimensions,
  Text
} from 'react-native';


import {useState, useEffect, useCallback} from 'react';
import { newSearch } from '../Api';

import Styles from '../Styles';
import Loading from '../Loading';
import ListProducts from "../Funcionality/ListProducts";
import {useFocusEffect} from "@react-navigation/native";

export const Category_Minifigs = () => {

  const [results, setResults] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);
  const [scrollToTop, setScrollToTop] = useState(null);
  const [loading, setLoading] = useState(true);
    
  const search = async (val, page) => {
    
    const category = '/minifigs';

    const q = {
      search: val,
    };
    if (page) {
      q.page = page;
    }
    if (!firstLoad){setLoading(true);}
    const items = await newSearch(category, q);

    setResults(items);
      setLoading(false);
    if (scrollToTop) {
      scrollToTop();
    }
  };

 useEffect(() => {
    if (firstLoad) {
      const randomPage = Math.floor(Math.random() * 100) + 1;
      search('', randomPage);
      setFirstLoad(false);
    }
  }, [firstLoad]);
  useFocusEffect(
      useCallback(() => {
        setFirstLoad(true);
      }, [])
  );
    return (
        <View style={Styles.container_Category}>
            {loading && firstLoad  ? (
                <Loading/>
            ) : (
                <>
                    <TextInput
                        style={Styles.box_Category}
                        onChangeText={(newText) => search(newText)}
                        placeholder="Buscar"
                        placeholderTextColor="#F4E9DC"
                        type="text"
                    />
                    <ListProducts results={results} productType="minifigs" />
                    <Text style={Styles.low_text_desplazar}>
                        Desplazate hacia la derecha para ver más
                    </Text>
                </>
            )}
        </View>
    );
};
import {
  TextInput,
  View,
  ActivityIndicator,
  FlatList,
  Dimensions,
  Text
} from 'react-native';

import { useState, useEffect } from 'react';
import { newSearch } from './Api';

import Styles from './Styles';
import Loading from './Loading';
import ListParts from './ListParts';

export const Category_Parts = () => {
  const [results, setResults] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);
  const [scrollToTop, setScrollToTop] = useState(null);

  const search = async (val, page) => {
    const category = '/parts';

    const q = {
      search: val,
    };
    if (page) {
      q.page = page;
    }

    const items = await newSearch(category, q);

    setResults(items);

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
  if (!results) <Loading />;

  return (
    <View style={Styles.container_Category}>
      <TextInput
        style={Styles.box_Category}
        onChangeText={(newText) => search(newText)}
        placeholder="Buscar"
        placeholderTextColor="#F4E9DC"
        type="text"
      />
      <ListParts results={results} />
      <Text style={Styles.low_text_desplazar}>Desplazate hacia la derecha para ver más</Text>
    </View>
  );
};

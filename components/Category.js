import {
  TextInput,
  View,
  ActivityIndicator,
  FlatList,
  Dimensions,
} from 'react-native';

import { useState } from 'react';
import { newSearch } from './Api';
import Product from './Product';
import Styles from './Styles'

const { width } = Dimensions.get('window');

export const Category = ({ route }) => {
  const { cat } = route.params;
  const [results, setResults] = useState([]);

  const search = async (val) => {
    //Select category.
    const category = cat; //Change depending on selected button.

    //Set up our query.
    const q = {
      search: val, //This will be our value in our searchbox.
      //page: 1,
      //page_size: 20,
    };

    const items = await newSearch(category, q);

    setResults(items);
  };

  if (!results) {
    return (
      <View style={Styles.loading_Category}>
        <ActivityIndicator color={'blue'} size="large" />
      </View>
    );
  }

  return (
    <View style={Styles.container_Category}>
      <TextInput
        style={Styles.box_Category}
        onChangeText={(newText) => search(newText)}
        placeholder="Search"
        type="text"
      />
      <FlatList
        style={Styles.flatList_Category}
        data={results}
        horizontal
        snapToAlignment="start"
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Product item={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={Styles.spacing_Category} />}
      />
    </View>
  );
};
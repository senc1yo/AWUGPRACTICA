import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import ListProducts from "../Funcionality/ListProducts";
import Loading from "../Loading";

export const AlternateConst = ({ route }) => {
  const [altBuilds, setAltBuilds] = useState(null);
  const item = route.params.item;
  const [scrollToTop, setScrollToTop] = useState(null);

  useEffect(() => {
    fetch(
      `https://rebrickable.com/api/v3/lego/sets/${item.set_num}/alternates/`,
      {
        headers: {
          Authorization: 'key 59fb97e709c9d9d94e40c5c62c838337',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setAltBuilds(data.results))
      .catch((error) => console.error(error));
  }, [item.set_num]);

    return (
        <View style={Styles.container_Category}>
            {altBuilds ? (
                altBuilds.length > 0 ? (
                    <ListProducts
                        results={altBuilds}
                        onSearch={setScrollToTop}
                        productType="alternateBuilds"
                    />
                ) : (
                    <Text
                        style={{
                            textAlign: 'center',
                            fontFamily: 'DosisRegular',
                            alignSelf: 'center',
                            fontSize: 50,
                            color: '#F4E9DC',
                        }}>
                        No existen builds alternativas :(
                    </Text>
                )
            ) : (
                <Loading/>
            )}
        </View>
    );

};

export default AlternateConst;

import {
    TextInput,
    View,
    ActivityIndicator,
    FlatList,
    Dimensions,
    Text
} from 'react-native';

import { useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage"; // Importar AsyncStorage para acceder a los favoritos

import Styles from '../Styles';
import Loading from '../Loading';
import ListProducts from "../Funcionality/ListProducts";

export const Favorites_Sets = () => {
    const [favorites, setFavorites] = useState([]); // Añadir un estado para los favoritos
    const [filteredFavorites, setFilteredFavorites] = useState([]); // Añadir un estado para los favoritos filtrados por la búsqueda
    const [searchText, setSearchText] = useState(""); // Añadir un estado para el texto de búsqueda

    useEffect(() => {
        // Obtener la lista de favoritos de AsyncStorage
        const getFavorites = async () => {
            try {
                const favorites = await AsyncStorage.getItem("favorites");
                if (favorites) {
                    setFavorites(JSON.parse(favorites));
                    setFilteredFavorites(JSON.parse(favorites)); // Inicializar los favoritos filtrados con todos los favoritos
                }
            } catch (error) {
                console.error(error);
            }
        };
        getFavorites();
    }, []);

    if (!favorites) <Loading />;

    // Función para filtrar los favoritos según el texto de búsqueda
    const filterFavorites = (text) => {
        if (text) {
            // Si hay texto, buscar los favoritos que coincidan con el nombre o el número del producto
            const filtered = favorites.filter((favorite) =>
                favorite.name.toLowerCase().includes(text.toLowerCase()) ||
                favorite.set_num.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredFavorites(filtered); // Actualizar el estado con los favoritos filtrados
        } else {
            // Si no hay texto, mostrar todos los favoritos
            setFilteredFavorites(favorites);
        }
    };

    return (
        <View style={Styles.container_Category}>
            <TextInput
                style={Styles.box_Category}
                onChangeText={(newText) => {
                    setSearchText(newText); // Guardar el texto de búsqueda en el estado
                    filterFavorites(newText); // Llamar a la función de filtrado con el texto
                }}
                placeholder="Buscar"
                placeholderTextColor="black"
                type="text"
            />

            <ListProducts results={filteredFavorites} productType="product" /> 
            <Text style={Styles.low_text_desplazar}>Desplazate hacia la derecha para ver tus favoritos</Text>

        </View>
    );
};

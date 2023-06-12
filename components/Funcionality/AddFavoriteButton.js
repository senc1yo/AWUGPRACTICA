import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddFavoriteButton = ({ item }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        // Check if the item is already in the favorites list
        const checkFavorite = async () => {
            try {
                const favorites = await AsyncStorage.getItem("favorites");
                if (favorites) {
                    const favoritesArray = JSON.parse(favorites);
                    const found = favoritesArray.find(
                        (favorite) => favorite.name === item.name
                    );
                    if (found) {
                        setIsFavorite(true);
                    }
                }
            } catch (error) {
                console.error(error);
            }
        };
        checkFavorite();
    }, []);

    // Toggle the favorite status of the item
    const toggleFavorite = async () => {
        try {
            const favorites = await AsyncStorage.getItem("favorites");
            let favoritesArray = [];
            if (favorites) {
                favoritesArray = JSON.parse(favorites);
            }
            if (isFavorite) {
                // Remove the item from the favorites list
                favoritesArray = favoritesArray.filter(
                    (favorite) => favorite.name !== item.name
                );
            } else {
                // Add the item to the favorites list
                favoritesArray.push(item);
            }
            await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
            setIsFavorite(!isFavorite);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <TouchableOpacity onPress={toggleFavorite} style={styles.fav}>
            <Ionicons
                name={isFavorite ? "star" : "star-outline"}
                size={50}
                color="black"
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    fav: {
        position: "absolute",
        top: 10,
        right: 10,
    },
});

export default AddFavoriteButton;

import {
    TextInput,
    View,
    ActivityIndicator,
    FlatList,
    Dimensions,
} from 'react-native';
import {useRef, useEffect, useCallback} from 'react';
const { width } = Dimensions.get('window');

import Styles from './Styles';
import ProductMinifigs from './ProductMinifigs';
import ProductMinifigsParts from './ProductMinifigsParts';
import ProductAlternateBuilds from './ProductAlternateBuilds';
import ProductParts from "./ProductParts";
import Product from "./Product";

export default ListProducts = ({ results, onSearch, productType }) => {
    const onRender = useCallback(() => {
        console.log("La lista se ha renderizado");
    }, []);

    const flatListRef = useRef(null);

    useEffect(() => {
        if (onSearch) {
            onSearch(() => {
                if (flatListRef.current) {
                    //Volvemos al principio al realizar la búsqueda. TODO Mirar como volver al principio con cada cambio
                    flatListRef.current.scrollToOffset({ offset: 0 });
                }
            });
        }
    }, [onSearch]);

    // Opción con switch
    const renderProduct = (item) => {
        switch (productType) {
            case 'minifigs':
                return <ProductMinifigs item={item} />;
            case 'minifigsParts':
                return <ProductMinifigsParts item={item} />;
            case 'alternateBuilds':
                return <ProductAlternateBuilds item={item} />;
            case 'product':
                return <Product item={item}/>;
            case 'productParts':
                return <ProductParts item={item}/>;
            default:
                return null;
        }
    };
    
    return (
        <FlatList
            ref={flatListRef}
            style={Styles.flatList_Category}
            data={results}
            horizontal
            onRender={onRender}
            snapToAlignment="center"
            decelerationRate={'fast'}
            showsHorizontalScrollIndicator={true}
            renderItem={({ item }) => renderProduct(item)} // Opción con switch
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={Styles.spacing_Category} />}
        />
    );
};

import { Pressable, Text, Image } from 'react-native';
import Styles from './Styles';

export default MainOption = ({ navigation, title, subtitle }) => {
    let image;
    switch (title) {
        case "Sets":
            image = require("../assets/SetsNavigation.png");
            break;
        case "Minifigs":
            image = require("../assets/MinifigsNavigation.png");
            break;
        case "Parts":
            image = require("../assets/PartsNavigation.png");
            break;
        default:
            image = null;
    }
    return (
        <Pressable
            onPress={() => navigation.navigate(title)}
            style={Styles.option_Main}>
            <Text style={Styles.title_Main}>{title}</Text>
            <Text style={Styles.title_Low}>{subtitle}</Text>
            <Image source={image} 
                   style={{width: 350, 
                       height: '200%', 
marginVertical: -150,                marginLeft: -30,
                resizeMode: "contain"}} />
        </Pressable>
    );
};

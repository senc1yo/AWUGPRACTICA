import { Pressable, Text } from 'react-native';
import Styles from './Styles';

export default MainOption = ({ navigation, title, subtitle }) => {
    return (
        <Pressable
            onPress={() => navigation.navigate(title)}
            style={Styles.option_Main}>
            <Text style={Styles.title_Main}>{title}</Text>
            <Text style={Styles.title_Low}>{subtitle}</Text>
        </Pressable>
    );
};
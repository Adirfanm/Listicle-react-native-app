import React from 'react';
import { Pressable, Image, Text } from 'react-native';
import { styles } from './styles';
import Config from 'react-native-config';

const ProductHomeItem = ({ title, price, onPress, image }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: `${Config.API_BASE_URL}/${image?.path}` }} />
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.price}>${price}</Text>
        </Pressable>
    );
};

export default React.memo(ProductHomeItem);

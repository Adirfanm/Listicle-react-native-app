import React from 'react';
import { Pressable, View, Image, Text } from 'react-native';
import { styles } from './styles';
import Config from 'react-native-config';

const FavoriteItem = ({ title, price, onPress, image, icon, onIconPress }) => {

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image}
                source={{ uri: image ? `${Config.API_BASE_URL}/${image?.path}` : null }} />
            <View style={styles.content}>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
            <Pressable onPress={onIconPress}>
                <Image style={styles.icon} source={icon || require('../../assets/remove.png')} />
            </Pressable >
        </Pressable>
    );
};

export default React.memo(FavoriteItem);

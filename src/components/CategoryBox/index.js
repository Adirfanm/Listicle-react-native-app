import React from 'react';
import { Pressable, View, Image, Text } from 'react-native';
import { colors } from '../../utils/colors';
import { styles } from './styles';

const CategoryBox = ({ title, onPress, image, isFirst, isSelected }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[
styles.container,
            isFirst ? { marginLeft: 16 } : {}
]}>
            <View
                style={[styles.imageContainer, isSelected ? { backgroundColor: colors.black } : {}]}>
                <Image style={styles.image} source={{ uri: image }} />
            </View>
            <Text
                style={[styles.text, isSelected ? { color: colors.primaryTextColor, fontWeight: '500' } : {}]}>{title}
            </Text>
        </Pressable>
    );
};

export default React.memo(CategoryBox);

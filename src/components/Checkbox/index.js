import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Checkbox = ({ checked, onCheck }) => {

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            hitSlop={20}
            onPress={() => onCheck(!checked)}
            style={styles.container} >
            {checked ? (
                <View style={styles.innerContainer}>
                    <Image style={styles.checkIcon} source={require('../../assets/check.png')} />
                </View>
            ) : null}
        </TouchableOpacity>
    );
};

export default React.memo(Checkbox);

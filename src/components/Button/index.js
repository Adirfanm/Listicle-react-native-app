import React, { memo } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Button = ({ title, onPress, style }) => {

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            hitSlop={20}
            onPress={onPress}
            style={[styles.container, style]} >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default React.memo(Button)
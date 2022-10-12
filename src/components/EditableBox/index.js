import React from 'react';
import { Pressable, Text, TextInput } from 'react-native';
import { styles } from './styles';

const EditableBox = ({ editable, style, label, value, onChangeText }) => {

    return (
        <Pressable style={[styles.container, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput editable={editable} value={value} onChangeText={onChangeText} style={styles.input} />
        </Pressable>
    );
};

export default EditableBox;

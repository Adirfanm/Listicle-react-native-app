import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image, Modal, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Input = ({ type, option, label, placeholder, isPassword, value, onChangeText, style, ...props }) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPickerModelVisible, setPickerModelVisible] = useState(false);

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const onSelect = (opt) => {
        onChangeText(opt);
        setPickerModelVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            {type === 'picker' ? (
                <Pressable onPress={() => setPickerModelVisible(true)} style={styles.inputContainer}>
                    {value ? (
                        <Text style={[styles.input, styles.selectedOption]}>{value?.title}</Text>
                    ) : (
                        <Text style={[styles.placeholder]}>{placeholder}</Text>
                    )}
                    <Image resizeMode='contain' style={styles.arrow}
                        source={require('../../assets/arrow.png')} />
                </Pressable>
            ) : (
                <View style={styles.inputContainer}>
                    <TextInput
                        secureTextEntry={isPassword && !isPasswordVisible}
                        placeholder={placeholder}
                        style={[styles.input, style]}
                        value={value}
                        onChangeText={onChangeText}
                        {...props}>
                    </TextInput>

                    {isPassword ? (
                        <Pressable onPress={onEyePress}>
                            <Image style={styles.eye}
                                source={isPasswordVisible ? require('../../assets/eye_closed.png') : require('../../assets/eye.png')} />
                        </Pressable>
                    ) : null}

                </View>
            )}
            <Modal transparent visible={isPickerModelVisible} >
                <TouchableOpacity activeOpacity={1} onPress={() => (setPickerModelVisible(false))} style={styles.modalWrapper}>
                    <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
                        <Text style={styles.headerTitle}>Select option</Text>
                        {option?.map((opt) => {
                            if (!opt.id) {
                                return null;
                            }
                            const selected = value?.id === opt?.id;
                            return (
                                <Text onPress={() => onSelect(opt)} style={[styles.optionText, selected ? styles.selectedOption : {}]} key={opt?.title}>{opt?.title}</Text>
                            );
                        })}
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </View >
    );
};

export default Input;

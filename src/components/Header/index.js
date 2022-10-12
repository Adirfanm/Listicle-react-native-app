import React, { useState } from 'react';
import { Pressable, View, Image, Text } from 'react-native';
import { styles } from './styles';
import Input from '../Input';

const Header = ({ title, onBackPress, onLogout, showLogout, showSearch, onSearch, keyword, showBack }) => {

    const [showSearchInput, setShowSearchInput] = useState(false);
    const onSearchClick = () => {
        setShowSearchInput(search => !search);
    };
    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                {showBack ? (
                    <Pressable hitSlop={20} onPress={onBackPress}>
                        <Image resizeMode='contain' style={styles.icon} source={require('../../assets/back.png')} />
                    </Pressable>
                ) : showSearch ? (
                    <Pressable hitSlop={20} onPress={onSearchClick}>
                        <Image style={styles.icon} source={require('../../assets/search.png')} />
                    </Pressable>
                ) : <View style={styles.space}></View>}
                <Text style={styles.title}>{title}</Text>
                {showLogout ? (
                    <Pressable hitSlop={20} onPress={onLogout}>
                        <Image style={styles.icon} source={require('../../assets/logout.png')} />
                    </Pressable>
                ) : <View style={styles.space}></View>}
            </View>

            {showSearchInput ? (
                <Input onChangeText={onSearch} value={keyword} placeholder='Type your keyword...' />
            ) : null}
        </View>
    );
};

export default React.memo(Header);

import React from 'react';
import { Text, View, Image, Pressable, ScrollView } from 'react-native';
import { styles } from './styles';
import Button from '../../../components/Button';

const Splash = ({ navigation }) => {

    const onSignup = () => {
        navigation.navigate('Signup');
    };

    const onSignin = () => {
        navigation.navigate('Signin');
    };

    return (
        <ScrollView style={styles.container}>
            <Image resizeMode='contain' style={styles.image} source={require('../../../assets/1.png')} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>You'll find </Text>
                <Text style={[styles.title, styles.innerTitle]}>All you need </Text>
                <Text style={styles.title}>here!</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title='Sign Up' onPress={onSignup} />
            </View>
            <Pressable hitSlop={20}>
                <Text style={styles.footerText} onPress={onSignin}>Sign In</Text>
            </Pressable>
        </ScrollView>
    );
};

export default Splash;

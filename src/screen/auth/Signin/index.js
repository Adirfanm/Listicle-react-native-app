import React, { useContext, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { styles } from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';
import { SafeAreaView } from 'react-native-safe-area-context';
import { userContext } from '../../../../App';
import { login } from '../../../utils/backendCall';

const Signin = ({ navigation }) => {

    const [values, setValues] = useState({});
    const { setUser } = useContext(userContext);

    const onSignup = () => {
        navigation.navigate('Signup');
    };

    const onBack = () => {
        navigation.goBack();
    };

    const onChange = (key, value) => {
        setValues(v => ({ ...v, [key]: value }));
    };

    const onSubmit = async () => {
        const token = await login(values);
        setUser({ token });
    };

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <AuthHeader title='Sign In' onBackPress={onBack} />
                <Input value={values.email} onChangeText={v => onChange('email', v)} label='Email' placeholder='example@gmail.com' />
                <Input value={values.password} onChangeText={v => onChange('password', v)} label='Password' placeholder='*****' isPassword />

                <Button onPress={onSubmit} style={styles.button} title='Sign In' />
                <Separator text='Or sign in with' />
                <GoogleLogin />

                <Text style={styles.footerText}>
                    Don't have an account?
                    <Text onPress={onSignup} style={styles.footerLink}> Sign Up</Text>
                </Text>

            </ScrollView>
        </SafeAreaView>
    );
};

export default Signin;

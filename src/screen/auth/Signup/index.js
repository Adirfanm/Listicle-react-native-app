import React, { useContext, useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signup } from '../../../utils/backendCall';
import { userContext } from '../../../../App';

const Signup = ({ navigation }) => {
    const [checked, setChecked] = useState(false);
    const [values, setValues] = useState({});
    const { setUser } = useContext(userContext);

    const onSignin = () => {
        navigation.navigate('Signin');
    };

    const onBack = () => {
        navigation.goBack();
    };

    const onChange = (key, value) => {
        setValues(v => ({ ...v, [key]: value }));
    };

    const onSubmit = async () => {
        try {
            if (!values?.fullName || !values?.email || !values?.password || !values?.confirmPassword) {
                Alert.alert('All field are required!');
                return;
            }
            if (values?.password !== values?.confirmPassword) {
                Alert.alert('Password do not match!');
                return;
            }
            if (!checked) {
                Alert.alert('Please agree to the terms!');
                return;
            }

            const token = await signup(values);
            setUser({ token });

        } catch (error) {
            console.info('error =>', error);
        }


    };

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <AuthHeader title='Sign Up' onBackPress={onBack} />
                <Input value={values.fullName} onChangeText={v => onChange('fullName', v)} label='Name' placeholder='John Doe' />
                <Input value={values.email} onChangeText={v => onChange('email', v)} label='Email' placeholder='example@gmail.com' />
                <Input value={values.password} onChangeText={v => onChange('password', v)} label='Password' placeholder='*****' isPassword />
                <Input value={values.confirmPassword} onChangeText={v => onChange('confirmPassword', v)} label='Confirm password' placeholder='*****' isPassword />

                <View style={styles.agreeRow}>
                    <Checkbox checked={checked} onCheck={setChecked} />
                    <Text style={styles.agreeText}>I agree with
                        <Text style={styles.agreeTextBold}> Terms </Text>
                        &
                        <Text style={styles.agreeTextBold}> Privacy</Text>
                    </Text>
                </View>

                <Button onPress={onSubmit} style={styles.button} title='Sign Up' />

                <Separator text='Or sign up with' />
                <GoogleLogin />

                <Text style={styles.footerText}>
                    Already have an account?
                    <Text onPress={onSignin} style={styles.footerLink}> Sign In</Text>
                </Text>

            </ScrollView>
        </SafeAreaView>
    );
};

export default Signup;

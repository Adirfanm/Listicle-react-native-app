import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";

const Signin = () => {

    const onSignup = () => {
        console.log('halo ges');
    }

    return (
        <ScrollView style={styles.container}>
            <AuthHeader title='Sign In' />
            <Input label='Email' placeholder='example@gmail.com' />
            <Input label='Password' placeholder='*****' isPassword />

            <Button style={styles.button} title='Sign In' />
            <Separator text='Or sign in with' />
            <GoogleLogin />

            <Text style={styles.footerText}>
                Don't have an account?
                <Text onPress={onSignup} style={styles.footerLink}> Sign Up</Text>
            </Text>

        </ScrollView>
    )
}

export default Signin
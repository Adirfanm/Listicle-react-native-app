import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 16
    },
    label: {
        marginBottom: 8,
        color: colors.primary,
        fontSize: 14,
        fontWeight: '500'
    },
    inputContainer: {
        borderWidth: 2,
        borderColor: colors.grey,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center'


    },
    input: {
        paddingHorizontal: 16,
        flex: 1
    },
    eye: {
        width: 24,
        height: 24,
        marginHorizontal: 16
    }
})
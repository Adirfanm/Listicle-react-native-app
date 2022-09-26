import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.primary,
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderRadius: 8
    },
    title: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    }
})
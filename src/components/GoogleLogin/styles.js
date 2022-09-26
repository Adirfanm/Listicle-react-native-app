import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        width: '45%',
        backgroundColor: colors.grey_second,
        borderRadius: 14,
        alignSelf: 'center',
        justifyContent: "center",
        alignItems: 'center',
        padding: 16,
        marginBottom: 40
    },
    image: {
        width: 38,
        height: 38
    }
})
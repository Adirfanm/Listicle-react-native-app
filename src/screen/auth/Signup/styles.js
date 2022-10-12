import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';


export const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    agreeRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    agreeText: {
        color: colors.primary,
        marginHorizontal: 12
    },
    agreeTextBold: {
        fontWeight: 'bold'
    },
    button: {
        marginVertical: 20,
    },
    footerText: {
        color: colors.primary,
        marginBottom: 72,
        alignSelf: 'center'
    },
    footerLink: {
        fontWeight: 'bold'
    }
});

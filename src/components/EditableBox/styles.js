import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingVertical: 8,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.22,
        shadowRadius: 3.65,

        elevation: 5,
        backgroundColor: colors.white,
        marginVertical: 8,
        borderRadius: 4,

    },
    label: {
        color: colors.grey,
        fontSize: 12,
    },
    input: {
        color: colors.primary,
        fontSize: 14,
        fontWeight: '500'
    }

});

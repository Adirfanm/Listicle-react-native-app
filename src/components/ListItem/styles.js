import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.22,
        shadowRadius: 3.65,
        elevation: 5,
        backgroundColor: colors.white,
        borderRadius: 4,
        marginBottom: 12

    },
    title: {
        color: colors.primary,
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        color: colors.grey,
        fontSize: 12,
        marginTop: 6
    },
    arrow: {
        width: 28,
        height: 28
    }

});

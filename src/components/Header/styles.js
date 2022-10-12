import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({

    outerContainer: {
        paddingHorizontal: 16,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 36,
        marginBottom: 16
    },
    title: {
        color: colors.primaryTextColor,
        fontSize: 16,
        fontWeight: 'bold'
    },
    icon: {
        width: 24,
        height: 24
    },
    space: {
        width: 24,
    }
});

import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        paddingVertical: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: colors.primaryTextColor
    },
    imageContainer: {
        backgroundColor: colors.grey,
        padding: 8,
        borderRadius: 8,
        marginBottom: 8
    },
    image: {
        width: 32,
        height: 32
    }
});

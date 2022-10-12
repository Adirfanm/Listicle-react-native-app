import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        margin: 8,
    },
    title: {
        color: colors.primaryTextColor,
        paddingVertical: 8,
    },
    image: {
        width: (width - 48) / 2,
        height: 228,
        borderRadius: 8,
        marginBottom: 4,
        backgroundColor: colors.grey_second
    },
    price: {
        color: colors.primaryTextColor,
        paddingBottom: 8
    }
});

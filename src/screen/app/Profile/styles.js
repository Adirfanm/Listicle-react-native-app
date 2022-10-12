import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black,
        marginBottom: 8
    },
    email: {
        fontSize: 14,
        color: colors.grey,
        marginBottom: 16
    },
    content: {
        flex: 1
    }
});

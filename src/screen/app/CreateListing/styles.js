import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontWeight: '500',
        fontSize: 16,
        color: colors.primary,
        marginVertical: 16
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 12,
    },
    uploadContainer: {
        width: 100,
        height: 100,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.grey,
        borderStyle: 'dotted',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
        marginBottom: 24,
    },
    uploadCircle: {
        width: 32,
        height: 32,
        borderRadius: 20,
        backgroundColor: colors.light_grey,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    uploadPlus: {
        color: colors.white,
        fontSize: 28,
    },
    imageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    close: {
        position: 'absolute',
        top: -110,
        right: 0,
        width: 24,
        height: 24,
    },
    textarea: {
        minHeight: 100,
    },
    button: {
        marginBottom: 48
    }
});

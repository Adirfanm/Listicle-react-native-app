import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        marginBottom: 8,
        color: colors.primary,
        fontSize: 14,
        fontWeight: '500'
    },
    inputContainer: {
        borderWidth: 2,
        borderColor: colors.grey,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        flex: 1
    },
    eye: {
        width: 24,
        height: 24,
        marginHorizontal: 16
    },
    arrow: {
        width: 16,
        height: 16,
        marginHorizontal: 16,
        transform: [{ rotate: '90deg' }]
    },
    placeholder: {
        color: colors.grey,
        paddingHorizontal: 16,
        paddingVertical: 12,
        flex: 1
    },
    modalWrapper: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        flex: 1,
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        width: '100%',
    },
    headerTitle: {
        marginBottom: 16,
        color: colors.black,
        fontSize: 16
    },
    optionText: {
        color: colors.black,
        paddingVertical: 12,
        fontSize: 15,
    },
    selectedOption: {
        color: colors.primary,
        fontWeight: 'bold',
        paddingVertical: 14
    }
});

import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        marginBottom: 50
    },
    item: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginVertical: 8
    },
    sectionTitle: {
        fontWeight: '500',
        fontSize: 16,
        color: colors.grey,
        marginBottom: 16,
    },
    sectionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        width: 28,
        height: 28
    },
    buttonSave: {
        paddingVertical: 12,
    }
});

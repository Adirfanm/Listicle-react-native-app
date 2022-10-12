import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        paddingVertical: 16,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.border_color
    },
    title: {
        color: colors.primaryTextColor,
        paddingVertical: 8,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 20,
        backgroundColor: colors.grey_second
    },
    price: {
        color: colors.primaryTextColor,
        paddingBottom: 8
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 8
    },
    content: {
        flex: 1
    }
});

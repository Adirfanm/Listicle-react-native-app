import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    safe: {
        borderWidth: 1,
        flex: 1
    },
    image: {
        width: '100%',
        height: height * 0.45,
        backgroundColor: colors.grey_second
    },
    content: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginTop: -40,
        paddingHorizontal: 24
    },
    title: {
        marginTop: 40,
        fontSize: 24,
        fontWeight: '500'
    },
    price: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 8
    },
    description: {
        color: colors.primaryTextColor,
        fontWeight: '300',
        marginVertical: 8
    },
    footer: {
        padding: 24,
        flexDirection: 'row',
        alignItems: 'center'
    },
    bookmarkContainer: {
        backgroundColor: colors.light_grey,
        padding: 18,
        borderRadius: 8,
        marginRight: 16
    },
    bookmarkIcon: {
        width: 20,
        height: 25
    },
    backContainer: {
        width: 40,
        height: 40,
        backgroundColor: colors.white,
        margin: 24,
        paddingRight: 2,
        borderRadius: 8,
        marginRight: 16,
        position: 'absolute',
        justifyContent: 'center'
    },
    backIcon: {
        width: 11,
        height: 22,
        alignSelf: 'center'
    }
});

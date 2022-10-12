import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';


export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        height: '100%'

    },
    titleContainer: {
        marginVertical: 54
    },
    image: {
        width: '100%',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.primaryTextColor
    },
    innerTitle: {
        color: colors.tersiaryTextColor
    },
    footerText: {
        color: colors.primary,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 30,
        marginBottom: 80
    }
});

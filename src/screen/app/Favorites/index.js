import React, { useContext } from 'react';
import { Alert, FlatList, Text } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import FavoriteItem from '../../../components/FavoriteItem';
import Header from '../../../components/Header';
import { ServicesContext } from '../../../../App';
import { updateService } from '../../../utils/backendCall';

const Favorites = ({ navigation }) => {

    const { services, setServices } = useContext(ServicesContext);
    const likedServices = Array.isArray(services) ? services?.filter(service => service?.liked) : [];

    const renderItem = ({ item }) => {

        const onProductPress = () => {
            navigation.navigate('ProductsDetails', { product: item });
        };
        const onRemove = async () => {
            const updatedServices = await updateService(item?._id, { liked: false });
            if (Array.isArray(updatedServices)) {
                setServices(updatedServices);
            }
        };
        const onIconPress = () => {
            Alert.alert('Are you sure want to remove this from your favorites?', '', [{ text: 'Yes', onPress: onRemove }, { text: 'cancel' }]);
        };
        return (
            <FavoriteItem
                onPress={onProductPress}
                onIconPress={onIconPress}
                {...item}
            />
        );
    };

    return (
        <SafeAreaView>
            <Header title={'Favorites'} />
            <FlatList
                ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 40 }}>You do not have any favorites yet</Text>}
                data={likedServices}
                style={styles.list}
                renderItem={renderItem}
                keyExtractor={item => String(item?._id)} />
        </SafeAreaView>
    );
};

export default React.memo(Favorites);

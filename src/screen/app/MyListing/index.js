import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FavoriteItem from '../../../components/FavoriteItem';
import Header from '../../../components/Header';
import { ProfileContext, ServicesContext } from '../../../../App';
import { deleteService } from '../../../utils/backendCall';

const MyListing = ({ navigation }) => {

    const { services, setServices } = useContext(ServicesContext);
    const { profile } = useContext(ProfileContext);
    const myServices = Array.isArray(services) ? services?.filter(service => service?.owner === profile?._id) : [];


    const renderItem = ({ item }) => {
        const onProductPress = () => {
            navigation.navigate('ProductsDetails', { product: item });
        };

        const onRemove = async () => {
            const updatedServices = await deleteService(item?._id);
            setServices(updatedServices);
        };

        return (
            <FavoriteItem onIconPress={onRemove} icon={require('../../../assets/remove-2.png')} onPress={onProductPress} {...item} />
        );
    };

    const goBack = () => {
        navigation.navigate('Profile');
    };

    return (
        <SafeAreaView>
            <Header title={'My Listing'} showBack onBackPress={goBack} />
            <FlatList
                data={myServices}
                renderItem={renderItem}
                keyExtractor={item => String(item?._id)} />
        </SafeAreaView>
    );
};

export default React.memo(MyListing);

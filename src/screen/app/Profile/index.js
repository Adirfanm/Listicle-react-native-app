import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import Button from '../../../components/Button';
import { getProfile } from '../../../utils/backendCall';
import { ProfileContext } from '../../../../App';

const Profile = ({ navigation }) => {
    const num = 10;
    const { profile, setProfile } = useContext(ProfileContext);

    useEffect(() => {
        (async () => {
            const data = await getProfile();
            setProfile(data);
        })();
    }, []);

    const onLogout = () => {
        console.log('logout');
    };
    const onSettingsPress = () => {
        navigation.navigate('Settings');
    };
    const onNewListingPress = () => {
        navigation.navigate('CreateListing');
    };
    const onMyLlistingPress = () => {
        navigation.navigate('MyListing');
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title={'Profile'} showLogout onLogout={onLogout} />
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.name}>{profile?.fullName}</Text>
                    <Text style={styles.email}>{profile?.email}</Text>

                    <ListItem onPress={onMyLlistingPress} title={'My Listing'} subtitle={`You have ${num} listing`} />
                    <ListItem onPress={onSettingsPress} title={'Setting'} subtitle={'Account, FAQ, Contact'} />
                </View>

                <Button onPress={onNewListingPress} style={{ flex: 0 }} title={'Add New Listing'} />
            </View>
        </SafeAreaView>
    );
};

export default React.memo(Profile);

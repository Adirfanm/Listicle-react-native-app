import React, { useContext, useState } from 'react';
import { View, Text, Linking, Image, Pressable, ScrollView } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import EditableBox from '../../../components/EditableBox';
import Button from '../../../components/Button';
import { ProfileContext } from '../../../../App';
import { updateProfile } from '../../../utils/backendCall';

const Settings = ({ navigation }) => {
    const [editing, setEditing] = useState(false);
    const { profile, setProfile } = useContext(ProfileContext);
    const [values, setValues] = useState({ _id: profile?._id, fullName: profile?.fullName, email: profile?.email });

    const onEditPress = () => {
        setEditing(true);
    };
    const onChange = (key, value) => {
        setValues(v => ({ ...v, [key]: value }));
    };
    const onSave = async () => {
        const updatedProfile = await updateProfile(values);

        setProfile(updatedProfile);
        setEditing(false);
    };
    const onItemPress = () => {
        Linking.openURL('https://google.com');
    };
    const goBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header showBack onBackPress={goBack} title={'Settings'} />
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Personal Information</Text>
                        <Pressable onPress={onEditPress}>
                            <Image style={styles.icon} source={require('../../../assets/edit.png')} />
                        </Pressable>
                    </View>
                    <EditableBox label={'Name'} onChangeText={v => onChange('fullName', v)} value={values.fullName} editable={editing} />
                    <EditableBox label={'Email'} onChangeText={v => onChange('email', v)} value={values.email} editable={editing} />

                    {editing ? (
                        <Button style={styles.buttonSave} onPress={onSave} title={'Save'} />
                    ) : null}

                    <Text style={[styles.sectionTitle, { marginTop: 40 }]}>Help Center</Text>

                    <ListItem onPress={onItemPress} style={styles.item} title={'FAQ'} />
                    <ListItem onPress={onItemPress} style={styles.item} title={'Contact us'} />
                    <ListItem onPress={onItemPress} style={styles.item} title={'Privacy & Terms'} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Settings);

import React, { useContext, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, SafeAreaView, Image, View, Pressable, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import Header from '../../../components/Header';
import { styles } from './styles';
import { launchImageLibrary } from 'react-native-image-picker';
import Input from '../../../components/Input';
import { categories } from '../../../data/categories';
import Button from '../../../components/Button';
import { addService } from '../../../utils/backendCall';
import { ServicesContext } from '../../../../App';

const CreateListing = ({ navigation }) => {

    const [images, setImages] = useState([]);
    const [values, setValues] = useState({});
    const [loading, setLoading] = useState(false);
    const { setServices } = useContext(ServicesContext);

    const goBack = () => {
        navigation.goBack();
    };

    const uploadNewImage = async () => {
        setLoading(true);
        const result = await launchImageLibrary();

        if (result?.assets?.length) {
            const assets = result?.assets || [];
            setImages(list => ([...list, ...assets]));
            setLoading(false);
        }
    };

    const onDeleteImage = (image) => {
        setImages((list) => {
            const filteredImages = list.filter(img => img?.fileName !== image?.fileName);
            return filteredImages;
        });
    };

    const onChange = (value, key) => {
        setValues(val => ({ ...val, [key]: value }));
    };

    const onSubmit = async () => {
        const img = images?.length ? images[0] : null;
        const data = {
            ...values,
            category: values.category?.id,
        };

        if (img) {
            data.image = {
                uri: img?.uri,
                name: img?.fileName,
                type: img?.type,
            };
        }

        const updatedServices = await addService(data);
        setServices(updatedServices);
        setValues({});
        navigation.navigate('MyListing');
    };

    return (
        <SafeAreaView style={{ marginBottom: 36 }}>
            <Header showBack={true} onBackPress={goBack} title={'Create a new listing'} />

            <ScrollView style={styles.container}>
                <KeyboardAvoidingView behavior='position'>
                    <Text style={styles.sectionTitle}>Upload photos</Text>
                    <View style={styles.imageRow}>
                        <TouchableOpacity disabled={loading} style={styles.uploadContainer} onPress={uploadNewImage}>
                            <View style={styles.uploadCircle}>
                                <Text>+</Text>
                            </View>
                        </TouchableOpacity>

                        {images?.map(image => (
                            <View key={image?.fileName}>
                                <Image style={styles.image} source={{ uri: image?.uri }} />
                                <Pressable hitSlop={20} onPress={onDeleteImage}>
                                    <Image style={styles.close} source={require('../../../assets/close.png')} />
                                </Pressable>
                            </View>
                        ))}

                        {loading ? (
                            <ActivityIndicator />
                        ) : null}
                    </View>

                    <Input placeholder={'Listing title'} label={'Name'} value={values.title} onChangeText={v => onChange(v, 'title')} />

                    <Input placeholder={'Select the category'} label={'Category'} value={values.category} onChangeText={v => onChange(v, 'category')} type='picker' option={categories} />

                    <Input placeholder={'Enter price in USD'} label={'Price'} value={values.price} onChangeText={v => onChange(v, 'price')} keyboardType='numeric' />

                    <Input style={styles.textarea} placeholder={'Tell us more...'} label={'Description'} value={values.description} onChangeText={v => onChange(v, 'description')} multiline />

                    <Button onPress={onSubmit} title='Submit' style={styles.button} />
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(CreateListing);

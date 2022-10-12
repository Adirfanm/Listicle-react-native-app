import React, { useEffect, useState, useContext } from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './styles';
import Header from '../../../components/Header';
import { categories } from '../../../data/categories';

import CategoryBox from '../../../components/CategoryBox';
import ProductHomeItem from '../../../components/ProductHomeItem';
import { getServices } from '../../../utils/backendCall';
import { ServicesContext } from '../../../../App';

const Home = ({ navigation }) => {

    const [selectedCategory, setSelectedCategory] = useState();
    const [keyword, setKeyword] = useState();
    const [filteredProduct, setFilteredProduct] = useState(services);
    const { services, setServices } = useContext(ServicesContext);


    useEffect(() => {

        (async () => {
            const data = await getServices();
            setServices(data);
        })();
    }, []);

    useEffect(() => {
        if (selectedCategory && !keyword) {
            const updatedProduct = services.filter(product => String(product?.category) === String(selectedCategory));
            setFilteredProduct(updatedProduct);
        } else if (selectedCategory && keyword) {
            const updatedProduct = services.filter(product => String(product?.category) === String(selectedCategory) &&
                product?.title?.toLowerCase().includes(keyword?.toLowerCase()));
            setFilteredProduct(updatedProduct);
        } else if (!selectedCategory && keyword) {
            const updatedProduct = services.filter(product => product?.title?.toLowerCase().includes(keyword.toLowerCase()));
            setFilteredProduct(updatedProduct);
        } else if (!keyword && !selectedCategory) {
            setFilteredProduct(services);
        }
    }, [selectedCategory, keyword, services]);

    const renderCategoryItem = ({ item, index }) => {
        return (
            <CategoryBox
                onPress={() => setSelectedCategory(item?.id)}
                isSelected={item?.id === selectedCategory}
                isFirst={index === 0}
                title={item?.title}
                image={item?.image} />
        );
    };

    const renderProductItem = ({ item }) => {
        const onProductPress = (product) => {
            navigation.navigate('ProductsDetails', { product });
        };

        return (
            <ProductHomeItem onPress={() => onProductPress(item)} {...item} />
        );
    };

    return (
        <>
            <Header
                showSearch
                title={'Find All You Need'}
                onSearch={setKeyword}
                keyword={keyword} />
            <View>
                <FlatList
                    style={styles.list}
                    horizontal
                    data={categories}
                    renderItem={renderCategoryItem}
                    keyExtractor={(item, index) => String(index)}
                    showsHorizontalScrollIndicator={false} />
                <FlatList
                    style={styles.productsList}
                    data={filteredProduct}
                    renderItem={renderProductItem}
                    numColumns={2}
                    keyExtractor={item => String(item._id)}
                    ListFooterComponent={<View style={{ height: 200 }}>
                    </View>} />
            </View>
        </>
    );
};

export default React.memo(Home);

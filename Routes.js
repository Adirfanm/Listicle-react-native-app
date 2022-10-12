import React, { useContext, useEffect, useState } from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screen/auth/Splash';
import Signup from './src/screen/auth/Signup';
import Signin from './src/screen/auth/Signin';
import Home from './src/screen/app/Home';
import Profile from './src/screen/app/Profile';
import Settings from './src/screen/app/Settings';
import ProductsDetails from './src/screen/app/ProductsDetails';
import Favorites from './src/screen/app/Favorites';
import CreateListing from './src/screen/app/CreateListing';
import MyListing from './src/screen/app/MyListing';
import { colors } from './src/utils/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserContext } from './App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addTokenToAxios } from './src/utils/request';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name='Settings' component={Settings} options={{ headerShown: false }} />
            <Stack.Screen name='CreateListing' component={CreateListing} options={{ headerShown: false }} />
            <Stack.Screen name='MyListing' component={MyListing} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let icon;

                    if (route.name === 'Home') {
                        icon = focused
                            ? require('./src/assets/tabs/home-active.png')
                            : require('./src/assets/tabs/home.png');
                    } else if (route.name === 'ProfileStack') {
                        icon = focused
                            ? require('./src/assets/tabs/profile-active.png')
                            : require('./src/assets/tabs/profile.png');
                    } else if (route.name === 'Favorites') {
                        icon = focused
                            ? require('./src/assets/tabs/bookmark-active.png')
                            : require('./src/assets/tabs/bookmark.png');
                    }

                    // You can return any component that you like here!
                    return <Image style={{ width: 25, height: 24 }} source={icon} />;
                },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderTopColor: colors.white,
                    elevation: 0,
                }
            })}>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Favorites' component={Favorites} />
            <Tab.Screen name='ProfileStack' component={ProfileStack} />
        </Tab.Navigator>
    );
};

const Routes = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        (async () => {
            const token = await AsyncStorage.getItem('auth_token');
            setUser({ token });

            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        })();
    }, []);

    useEffect(() => {
        if (user?.token) {
            addTokenToAxios(user?.token);
        }
    }, [user]);

    const theme = {
        colors: {
            background: colors.white
        }
    };

    if (isLoading) {
        return null;
    }

    return (

        < NavigationContainer theme={theme} >
            <Stack.Navigator>
                {user?.token ? (
                    <>
                        <Stack.Screen name='Tabs' component={Tabs} options={{ headerShown: false }} />
                        <Stack.Screen name='ProductsDetails' component={ProductsDetails} options={{ headerShown: false }} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name='Spash' component={Splash} options={{ headerShown: false }} />
                        <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
                        <Stack.Screen name='Signin' component={Signin} options={{ headerShown: false }} />
                    </>
                )}
            </Stack.Navigator>
        </ NavigationContainer>

    );
};


export default React.memo(Routes);

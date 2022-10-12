import AsyncStorage from '@react-native-async-storage/async-storage';
import { request } from './request';

export const login = async (values) => {
    try {
        const response = await request({
            url: '/user/login',
            method: 'post',
            data: values,
        });
        if (response?.data?.token) {
            await AsyncStorage.setItem('auth_token', response?.data?.token);
            return response?.data?.token;
        }
    } catch (error) {
        console.log('e.response', error?.response);
    }
};

export const signup = async (values) => {
    try {
        const response = await request({
            url: '/user/register',
            method: 'post',
            data: values,
        });
        if (response) {
            const { email, password } = values;
            const loginResponse = await login({ email, password });
            return loginResponse;
        }
    } catch (error) {
        console.log('e.response', error?.response);
    }
};

export const getProfile = async () => {
    try {
        const response = await request({
            url: '/user/profile',
            method: 'get',
        });
        if (response) {
            return response?.data;
        }
    } catch (error) {
        console.log('error profile :', error);
    }
};

export const updateProfile = async (data) => {
    try {
        const response = await request({
            url: '/user/profile',
            method: 'patch',
            data,
        });
        if (response) {
            const profile = await getProfile();
            return profile;
        }
    } catch (error) {
        console.log('error profile :', error);
    }
};

export const getServices = async () => {
    try {
        const response = await request({
            url: '/services',
            method: 'get',
        });
        if (response) {
            return response?.data;
        }
    } catch (error) {
        console.log('error services :', error.response);
    }
};

export const updateService = async (id, data) => {
    try {
        const response = await request({
            url: '/services',
            method: 'patch',
            data: {
                servicesId: id,
                ...data
            }
        });
        if (response) {
            const services = await getServices();
            return services;
        }
    } catch (error) {
        console.log('error update services :', error);
    }
};

export const deleteService = async (id) => {
    try {
        const response = await request({
            url: '/services',
            method: 'delete',
            data: {
                servicesId: id,
            }
        });
        if (response) {
            const services = await getServices();
            return services;
        }
    } catch (error) {
        console.log('error delete services :', error.response);
    }
};

export const addService = async (data) => {
    try {
        const formData = new FormData();
        const objKeys = Object.keys(data);

        objKeys.forEach((key) => {
            formData.append(key, data[key]);
        });
        const response = await request({
            url: '/services',
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            data: formData,
        });
        if (response) {
            const services = await getServices();
            return services;
        }
    } catch (error) {
        console.log('error add services :', error.response);
    }
};


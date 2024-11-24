import axiosClient from './axiosClient';

const addProductToCart = async (data) => {
    return await axiosClient.post('/cart', data);
};

const getCart = async (userId) => {
    return await axiosClient.get(`/cart/${userId}`);
};

const deleteItem = async (body) => {
    return await axiosClient.delete(`/cart/deleteItem`, {
        data: body
    });
};

const deleteCart = async (body) => {
    return await axiosClient.delete(`/cart/delete`, {
        data: body
    });
};

export { addProductToCart, getCart, deleteItem, deleteCart };

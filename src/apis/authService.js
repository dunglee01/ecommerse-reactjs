import axiosClient from './axiosClient';

const register = async (body) => {
    return await axiosClient.post('/register', body);
};

const signIn = async (body) => {
    return await axiosClient.post('/login', body);
};

const getInfo = async () => {
    return await axiosClient.get(
        '/user/info/443e022b-6b80-44e0-a041-4e46c02d8801'
    );
};

export { register, signIn, getInfo };

import axios from 'axios';
import Cookies from 'js-cookie';

const axiosClient = axios.create({
    baseURL: 'https://be-project-reactjs.vercel.app/api/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

const handleRequestSuccess = async (config) => {
    const token = Cookies.get('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
};

const handleRequestErr = (err) => {
    return Promise.reject(err);
};

const handleResponseSuccess = (res) => {
    return res;
};

const handleResponseErr = async (err) => {
    const originalRequest = err.config;

    if (err.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = Cookies.get('refreshToken');

        if (!refreshToken) return Promise.reject(err);

        try {
            const res = await axiosClient.post('/refresh-token', {
                token: refreshToken
            });

            const newAccessToken = res.data.accessToken;
            Cookies.set('token', newAccessToken);
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

            return axiosClient(originalRequest);
        } catch (error) {
            Cookies.remove('token');
            Cookies.remove('refreshToken');
            Cookies.remove('userId');

            return Promise.reject(error);
        }
    }
};

axiosClient.interceptors.request.use(
    (config) => handleRequestSuccess(config),
    (err) => handleRequestErr(err)
);

axiosClient.interceptors.response.use(
    (config) => handleResponseSuccess(config),
    (err) => handleResponseErr(err)
);

export default axiosClient;

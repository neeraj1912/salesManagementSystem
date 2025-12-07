import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/sales',
});

export const getSales = async (params) => {
    const response = await api.get('/', { params });
    return response.data;
};

export const getOptions = async () => {
    const response = await api.get('/options');
    return response.data;
}

export default api;

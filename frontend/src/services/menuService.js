import axios from 'axios';

const API_URL = 'http://your-api-url/api/menu';

export default {
    getAllItems() {
        return axios.get(API_URL);
    },
    getItem(id) {
        return axios.get(`${API_URL}/${id}`);
    },
    createItem(item) {
        return axios.post(API_URL, item);
    },
    updateItem(id, item) {
        return axios.put(`${API_URL}/${id}`, item);
    },
    deleteItem(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
};
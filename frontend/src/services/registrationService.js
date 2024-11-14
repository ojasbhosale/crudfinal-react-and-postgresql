// frontend/src/services/registrationService.js
import axios from 'axios';

const API_URL = 'https://crud-backend-fmk6.onrender.com/api/registrations';

const create = (data) => axios.post(API_URL, data);
const getAll = () => axios.get(API_URL);
const update = (id, data) => axios.put(`${API_URL}/${id}`, data);
const remove = (id) => axios.delete(`${API_URL}/${id}`);

export default { create, getAll, update, remove };

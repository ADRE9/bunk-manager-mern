import axios from 'axios';

const url="http://localhost:5000/user"

export const createUser = (userData) => axios.post(`${url}/new/signup`, userData);

export const createCrUser = (userData) => axios.post(`${url}/new/signup`, userData);

export const deleteUser = (id) => axios.delete(`${url}/${id}`);

export const updateUser = (id, updatedData) => axios.patch(`${url}/${id}`, updatedData);

export const logoutUser = () => axios.post(`${url}/logout`);

export const logoutFromAllDevices = () => axios.post(`${url}/logoutAll`);
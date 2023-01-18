import axios, { AxiosInstance } from 'axios';

export const customAxiosTodo = () => {
    const token = window.localStorage.getItem('token');
    const baseAxios: AxiosInstance = axios.create({
        baseURL: "",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        withCredentials: true,
    })

    return baseAxios;
}
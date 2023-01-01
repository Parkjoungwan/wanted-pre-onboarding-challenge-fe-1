import axios, { AxiosInstance } from 'axios';

export const customAxiosTodo = () => {
    const token = sessionStorage.getItem('token');
    const baseAxios: AxiosInstance = axios.create({
        baseURL: "http://localhost:8080",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        withCredentials: true,
    })
    
    return baseAxios;
}
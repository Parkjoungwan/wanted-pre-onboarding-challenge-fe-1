import axios, { AxiosInstance } from 'axios';

export const customAxiosAuth = () => {
    const baseAxios: AxiosInstance = axios.create({
        baseURL: "",
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    })

    return baseAxios;
}
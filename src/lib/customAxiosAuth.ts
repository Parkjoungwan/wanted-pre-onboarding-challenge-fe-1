import axios, { AxiosInstance } from 'axios';

export const customAxiosAuth = () => {
    const baseAxios: AxiosInstance = axios.create({
        baseURL: "http://localhost:8080",
        withCredentials: true,
    })

    return baseAxios;
}
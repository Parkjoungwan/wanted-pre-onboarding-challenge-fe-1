import axios, { AxiosInstance } from 'axios';

export const customAxiosAuth = () => {
    const baseAxios: AxiosInstance = axios.create({
        baseURL: "",
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    })

    const errorHandler = async (error: any) => {
        let errorMsg;
        if (error.response && error.response.status === 400) {
            errorMsg = {
                response: {
                    data: {message: 'Check your input'},
                    status: error.response.status,
                    }
            }
        }
        if (error.response && error.response.status === 409) {
            errorMsg = {
                response: {
                    data: {message: 'Already exist this userInfo'},
                    status: error.response.status,
                    }
            }
        }
        return Promise.reject(errorMsg);
    }
    baseAxios.interceptors.response.use(
        (response: any) => {
            return response;
        },
        error => errorHandler({ ...error })
    );

    return baseAxios;
}
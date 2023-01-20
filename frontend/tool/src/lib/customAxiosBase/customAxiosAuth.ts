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
                    data: {message: 'ID 또는 PASSWORD가 잘못되었습니다.'},
                    status: error.response.status,
                    }
            }
        }
        if (error.response && error.response.status === 409) {
            errorMsg = {
                response: {
                    data: {message: '해당 ID는 이미 존재합니다.'},
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
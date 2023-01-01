import { customAxiosAuth } from './customAxiosAuth';

export const authApi = {
    postLogin: (email:string, password:string) => customAxiosAuth().post('/users/login', {
        email: email,
        password: password
    }),
    postJoin: (email:string, password:string) => customAxiosAuth().post('/users/join', {
        email: email,
        password: password
    }),

}
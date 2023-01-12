import { customAxiosAuth } from "../customAxiosBase/customAxiosAuth";

export const authApi = {
  postLogin: (email: string, password: string) =>
    customAxiosAuth().post("/users/login", {
        email: email,
        password: password,
    }),
  postJoin: (email: string, password: string) =>
    customAxiosAuth().post("/users/create", {
        email: email,
        password: password,
    }),
};

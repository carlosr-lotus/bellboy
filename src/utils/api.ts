import axios, { AxiosInstance } from "axios";

export function getApi(ctx?: any): AxiosInstance {
    const api = axios.create({
        baseURL: "http://localhost:4000"
    });

    return api;
}
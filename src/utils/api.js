import axios from 'axios';

let isAxiosInitialized = false;
let initializedAxiosInstance = null;

export const axiosInstance = () => {
    if(!isAxiosInitialized || !initializedAxiosInstance){
        initAxiosInstance();
        isAxiosInitialized = true;
    }

    return initializedAxiosInstance;
}

// This instanced axios allows for a one time setup of axios when it comes to
// CSRF tokens and authentiacion with token, and also use of sub domain apps
const initAxiosInstance = () => {
    let baseUrl = "https://cloverlabs.io/wp-json/wp/v2";
    const newInstance = axios.create({
        baseURL: baseUrl
    });

    initializedAxiosInstance = newInstance;
}
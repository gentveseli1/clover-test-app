import {axiosInstance} from '../utils/api';

export const loadPosts = () => {
    return axiosInstance().get(`/posts`);
}

export const loadSinglePost = (noteId) => {
    return axiosInstance().get(`/posts/${noteId}`);
}
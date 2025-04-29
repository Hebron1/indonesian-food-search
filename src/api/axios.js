import axios from "axios";

const base = 'https://world.openfoodfacts.org/api/v3';

export const axiosInstance = axios.create({
    baseURL: base
})
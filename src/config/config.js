import axios from "axios";

export const API_KEY = "95f53b9a6fab8719a90327e356bed296";
const BASE_URL = "https://api.themoviedb.org/";
export const BASE_IMG_URL = "https://image.tmdb.org/t/p/";

export const urlRequest = axios.create({
  baseURL: BASE_URL,
});

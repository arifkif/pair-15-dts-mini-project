import axios from "axios";

export const API_KEY = "59b856cf5dd5e145e18d773bc9f11a16";
const BASE_URL = "https://api.themoviedb.org/";
export const BASE_IMG_URL = "https://image.tmdb.org/t/p/";

export const urlRequest = axios.create({
  baseURL: BASE_URL,
});

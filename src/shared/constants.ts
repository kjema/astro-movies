export const isDevelopment = process.env.NODE_ENV === "development";

export const TMDB_API_KEY = isDevelopment
  ? import.meta.env.TMDB_API_KEY
  : process.env.TMDB_API_KEY;

export const TMDB_BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

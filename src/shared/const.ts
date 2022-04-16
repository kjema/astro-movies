export const isDevelopment = process.env.NODE_ENV === "development";

export const TMDB_API_KEY = isDevelopment
  ? import.meta.env.TMDB_API_KEY
  : process.env.TMDB_API_KEY;

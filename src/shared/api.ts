import { TmdbResponse } from "./types";
import * as Const from "./const";

export async function getMovies() {
  let apiKey = Const.TMDB_API_KEY;

  if (!apiKey) {
    apiKey = process.env.TMDB_API_KEY;
  }

  const url = new URL("3/movie/popular", "https://api.themoviedb.org");
  url.searchParams.set("api_key", apiKey);
  url.searchParams.set("language", "en-US");

  const request = new Request(url.href);

  const response = await fetch(request, { method: "GET" });

  if (!response.ok) return Promise.reject(response.statusText);
  const data: TmdbResponse = await response.json();

  return data.results;
}

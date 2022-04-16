import { TmdbResponse } from "./types";
import * as Const from "./constants";

export async function getMovies() {
  const url = new URL("3/movie/popular", "https://api.themoviedb.org");
  url.searchParams.set("api_key", Const.TMDB_API_KEY);
  url.searchParams.set("language", "en-US");

  const request = new Request(url.href);

  const response = await fetch(request, { method: "GET" });

  if (!response.ok) return Promise.reject(response.statusText);
  const data: TmdbResponse = await response.json();

  return data.results;
}

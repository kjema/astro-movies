import { TmdbResponse } from "./types";

export async function getMovies(apiKey: string) {
  const url = new URL("3/movie/popular", "https://api.themoviedb.org");
  url.searchParams.set("api_key", apiKey);
  url.searchParams.set("language", "en-US");

  const request = new Request(url.href);

  const response = await fetch(request, { method: "GET" });

  if (!response.ok) return Promise.reject(response.statusText);
  const data: TmdbResponse = await response.json();

  return data.results;
}

import { fetchData } from "@/compons/fetchData/fetch";
import MoviesPage from "./moviesQueries";
export default function MoviesQueries(){
  return(
   <MoviesPage />
  )
}

export async function generateStaticParams() {
  const movies = await fetchData("moviesData", 100, null);
  return movies.map((movie) => ({
    title: movie.title,
    desc: movie.desc,
    image: movie.img,
    type: movie.type,
    link: movie.link,
    warn: movie.warn,
  }));
}
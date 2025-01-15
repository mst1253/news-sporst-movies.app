import { fetchData } from "@/compons/fetchData/fetch";
import MoviesPage from "./moviesQueries";
export default function MoviesQueries({ searchParams }){
  return(
   <MoviesPage  searchparams={searchParams}/>
  )
}

export async function generateStaticParams() {
  const movies = await fetchData("moviesData", 100, null);
  console.log("Fetched movies data:", movies); // Check if it's an array
  
  if (!Array.isArray(movies)) {
    throw new Error("fetchData did not return an array");
  }

  return movies.map((movie) => ({
    title: movie.title,
    desc: movie.desc,
    image: movie.img,
    type: movie.type,
    link: movie.link,
    warn: movie.warn,
  }));
}
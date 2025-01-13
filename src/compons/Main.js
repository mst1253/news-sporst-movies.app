import MainHero from "./Main/mainHero";
import Sports from "./Main/sports";
import Movies from "./Main/movies";
export default function Main() {
    return (
      <div className="container mx-auto my-3 dark:bg-slate-800 dark:text-white">
       <MainHero />
       <Sports />
       <Movies />
      </div>
    )
  }
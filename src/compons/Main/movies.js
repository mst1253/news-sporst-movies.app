"use client";
import Image from "next/image";
import Link from "next/link";
import { MovieSkel,MovieSkel2 } from "../load/skeleton";

import { useQuery } from "react-query";
import { fetchData } from "../fetchData/fetch";
export default function Movies() {
  
  const {data:moviesData1,isLoading:isOMLoading}=useQuery({
        queryFn:()=>fetchData("moviesData",20,'OM'),
        queryKey:['OM']
      })
  const {data:moviesData2,isLoading:isMWLoading}=useQuery({
        queryFn:()=>fetchData("moviesData",7,'MW'),
        queryKey:['MW']
      })
    const {data:moviesData3,isLoading:isNMLoading}=useQuery({
        queryFn:()=>fetchData("moviesData",20,'NM'),
        queryKey:['NM']
    })
 
  const titleClasses=
  "opacity-0 translate-y-d absolute bottom-0 -my-8 group-hover:opacity-100 transition-transform duration-700 group-hover:-translate-y-2 hover:text-orange-500 dark:hover:text-blue-500"
  return (
    <div className="container p-4 border-t-2 dark:border-white border-slate-900" style={{direction:'rtl'}}>
      <h1 className="font-bold">movies</h1>
       <div className="container">
        <div className="container p-4 grid flex-wrap grid-cols-3 gap-10 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8">
        {isOMLoading ? <MovieSkel /> :moviesData1?.map(data=>(
          <div key={data.id} className="group relative grid place-items-center">
          
            <Image className="h-[10rem]" src={data.img} width={200} height={500} alt="card image" />
            <span className="absolute p-2 -my-4 bottom-0 right-0 bg-orange-500 dark:bg-blue-500 rounded-full flex justify-center items-center">
              <h2 className="text-white text-sm">{data.rate}</h2>
              </span>
              <h3 className={titleClasses}>
              <Link href={{
              pathname:"/movies/info",
             query:{
              title:data.title.replace(/ /g,'_'),
              image:data.img,
              desc:data.description,
              link:data.link,
              warn:data.warn,
              type:data.type
            }
            }}>{data.title}</Link>
              </h3>
          </div>
         ))}
        </div>
        <div className="relative container p-3 my-7 bg-gradient-to-r bg-blue-500 dark:bg-orange-500  to-slate-950  text-white">
          <h3 className="absolute p-2 bg-orange-500 dark:bg-blue-500 text-white rounded-3xl text-sm">
          <Link href={'/movies/info'}>most watched</Link></h3>
          <div className="container  my-11 grid flex-wrap grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
          {isMWLoading ? <MovieSkel2 /> :moviesData2?.map(data=>(
            <div key={data.id}className="grid relative place-items-center gap-2 p-2">
            <Image  src={data.img} width={200} height={500} alt="card image" />
            <h3 className='hover:text-orange-500 dark:hover:text-blue-800'>
            <Link href={{
              pathname:"/movies/info",
            query:{
              title:data.title.replace(/ /g,'_'),
              image:data.img,
              desc:data.description,
              link:data.link,
              warn:data.warn,
              type:data.type
            }
            }}>{data.title}</Link>
            </h3>
            </div>
          ))}
          </div>
        </div>
        </div>
        <div className="container p-4 grid flex-wrap grid-cols-3 gap-10 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8">
        {isNMLoading ? <MovieSkel />:moviesData3?.map(data=>(
          <div key={data.id} className="group relative grid place-items-center">
          <Image className="h-[10rem]" src={data.img} width={200} height={500} alt="card image"  />
          <span className="absolute p-2 -my-4 bottom-0 right-0 bg-orange-500 dark:bg-blue-500 rounded-full flex justify-center items-center">
           <h2 className="text-white text-sm">{data.rate}</h2>
          </span>
          <h3 className={titleClasses}>
          <Link href={{
              pathname:"movies/info",
            query:{
              title:data.title.replace(/ /g,'_'),
              image:data.img,
              desc:data.description,
              link:data.link,
              warn:data.warn,
              type:data.type
            }
            }}>{data.title}</Link>
          </h3>
        </div>
          ))}
       </div>
      </div>
     
  )
}
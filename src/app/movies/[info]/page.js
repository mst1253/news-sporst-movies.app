"use client";
import { Button, Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useState} from "react";
import { fetchData } from "@/compons/fetchData/fetch";
import { useQuery } from "react-query";

export default function MoviesPage({ searchParams }) {
  
  const [title, setTitle] = useState(searchParams?.title || "");
  const [desc, setDesc] = useState(searchParams?.desc || "");
  const [img, setImg] = useState(searchParams?.image || "");
  const [type, setType] = useState(searchParams?.type || "");
  const [link, setLink] = useState(searchParams?.link || "");
  const [warn, setWarn] = useState(searchParams?.warn || "");
  
  const {data:moviesData,isLoading:isOMLoading}=useQuery({
    queryFn:()=>fetchData("moviesData",100,null),
    queryKey:['allMovies']
  })

 
  const transformData=(...state)=>{
    if(state){
      setTitle(state[0] ||'')
      setImg(state[2] ||'')
      setDesc(state[1] ||'')
      setType(state[3] ||'')
      setLink(state[4] ||'')
      setWarn(state[5] ||'')
    }
  }
  return (
    <div className="container py-4 relative w-screen h-auto grid gap-4 dark:bg-slate-800 mx-auto dark:text-white"> 
      <Card className="p-4 flex">
        <div className="container grid place-items-center">
        <Image className="animate-bounceCustome hover:animate-none shadow-md dark:shadow-orange-500" src={img} width={300} height={600} alt="just image" />
        </div>
        <div className="container p-8 space-y-3" dir="rtl">
           <h1 className="text-xl">{title.replaceAll('_',' ')}</h1>
           <p>{desc}</p>
             <span className="p-3 flex gap-2">
                <Button className="bg-orange-600 p-2">{type}</Button>
             </span>
             <h2>the link is: <Link href="#" className="text-blue-700 dark:text-orange-500">{link}</Link></h2>
             <p><b className=" text-blue-700 dark:text-orange-500">attention:</b>{warn}</p>
        </div>
        </Card>
        <div className="grid flex-wrap grid-cols-3 
        gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 text-center 
        
        " dir="rtl">
          {moviesData?.map(data=>(
            data.type==searchParams.type && data.title != searchParams.title&&
            <Card  className="rounded-md"key={data.id}  renderImage={()=><Image priority={true} src={data.img} width={500} height={500}
            alt="card image"/>}>
                <h3 className="font-bold hover:text-blue-500" onClick={()=>transformData(data.title,
                  data.description,data.img,data.type,data.link,data.warn)}>{data.title}</h3>
                  {data.category!="MW"&&
                  <span className="bg-orange-500 rounded-full flex justify-center items-center">
                  <h2 className="text-white text-sm">{data.rate}</h2>
                  </span>
                  }
            </Card>
          ))  
          }
          
        </div>
    </div>
  )
}

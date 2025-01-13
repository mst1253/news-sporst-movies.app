"use client";
import Image from "next/image"
import { Card } from "flowbite-react"
import Link from "next/link";
import { CardSkel } from "../load/skeleton";
import { fetchData } from "../fetchData/fetch";
import { useQuery } from "react-query";
export default function Sports() {
  const {data:sportsData,isLoading}=useQuery({
        queryFn:()=>fetchData('sportsData',20,null),
        queryKey:['sport']
      })
    
  return (
    <div className="container p-2 my-10  border-t-2 border-black dark:border-white" style={{direction:'ltr'}}>
      <h1 className="font-bold">sports</h1>
      <div className="p-4 grid flex-wrap grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"> 
         {isLoading?<CardSkel />:sportsData?.map(data=>(
          <div key={data.id} className="p-3 grid gap-4 rounded-lg">
          
          <Card className="grid place-items-center" 
           renderImage={()=><Image src={data.img} width={500} height={500}
           alt="card image" style={{height:"auto",width:"auto"}}/>} >
           <h2 className="font-bold mx-auto hover:text-orange-500 dark:text-white dark:hover:text-blue-800">
            <Link href={{
              pathname:"/sports/info",
            query:{
              title:data.title.replace(/ /g,'_'),
              image:data.img,
              desc:data.description
            }
            }}>{data.title}</Link>
            </h2>
           <p className="text-gray-500 text-sm text-center dark:text-slate-300"> 
            {data.description.split(" ").slice(0,15).join(' ')+"..."}
           </p>
         </Card>
         
         </div>
         ))}
      
      </div>
    </div>
  )
}


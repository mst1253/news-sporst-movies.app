'use client'
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
import Search from "./search";
import { Card } from "flowbite-react";
import Image from "next/image";
import { useQuery } from "react-query";
import { fetchData } from "../fetchData/fetch";
export default function DisplaySearchData({valid,setValid,option}) {
    const [value,setValue]=useState('')
    const fetchTheData = () => {
      if (option === "news") {
        return fetchData("newsData", 100, null);
      } else if (option === "sports") {
        return fetchData("sportsData", 100, null);
      } else if (option === "movies") {
        return fetchData("moviesData", 100, null);
      } else {
        return null;
      }
    };
     const {data,isLoading,error}=useQuery({
        queryFn:()=>fetchTheData(),
        queryKey:['fetchTheData',option],
      })
      const result=value?data?.filter(da=>da.title.toLowerCase().includes(value.toLowerCase())):[]
  return (
  <>
<div 
    className={`${valid ? "visible":"hidden"} p-16 mx-auto overflow-y-scroll overflow-x-hidden fixed top-0 z-50 justify-center
     items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full `}>
    <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center gap-4 p-4 md:p-5 border rounded-t dark:border-gray-600">
            <Search setValue={setValue}/>
                <button type="button" className=" text-gray-400 bg-transparent
                 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-10 h-10
                  ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600
                   dark:hover:text-white" onClick={()=>setValid(false)}>
                   <IoIosClose className="w-8 h-8"/>
                </button>
            </div>
            <div className="p-4 grid flex-wrap grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 text-center" dir="rtl">
              {result?.map(data=>(
                <Card 
                key={data.id} 
                renderImage={() => (
                  <Image 
                    priority={true} 
                    src={Array.isArray(data.img)?data.img[0]:data.img} 
                    width={200} 
                    height={200} 
                    alt="card image" 
                    className="rounded-t-md"
                  />
                )}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col items-center justify-between"
              >
               <h1 className="font-bold  text-orange-500 text-sm">
                <Link href={{
                 pathname:`${option}/info`,
                 query:{
                 title:data.title.replace(/ /g,'_'),
                 image:Array.isArray(data.img)?data.img[0]:data.img,
                 desc:data.description,
                 }
                 }}>{data.title}</Link>
               </h1>
                {data.rate ? (
                  <span className="p-1 bg-orange-500 dark:bg-blue-500 rounded-full flex items-center justify-center">
                    <h2 className="text-white text-xs font-semibold">{data.rate}</h2>
                  </span>
                ) : (
                  <p className="text-gray-600 dark:text-gray-300 text-xs text-center">
                    {data.description.split(' ').slice(0, 4).join(' ')}
                  </p>
                )}
              </Card>
              
              ))      
              }
              
            </div>
        </div>
    </div>
</div>
</>
  )
}
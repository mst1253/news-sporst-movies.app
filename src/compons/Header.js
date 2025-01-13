"use client"

import Image from "next/image";
import { Carousel } from "flowbite-react";
import Link from "next/link";
import { useState,useEffect} from "react";
import { useQuery } from "react-query";
import { fetchData } from "./fetchData/fetch";
import { HeaderSkel } from "./load/skeleton";
export default  function Header() {
   const [date,setDate]=useState('')
   const [load,setLoading]=useState(true);
  
    const {data:firstNews,isLoading}=useQuery({
      queryFn:()=>fetchData('newsData',1,"n1"),
      queryKey:['n1']
    })
   
  useEffect(()=>{
    const getDate=async()=>{
       try{
      const data= await fetch("http://localhost:3000/api?action=getCurrentDate")
      const result=await data.json()
      const date = new Date(result.date);
      const options = { weekday: 'long', 
        month: 'long', day: 'numeric', year: 
        'numeric', hour: 'numeric', minute: 'numeric', 
        second: 'numeric' };
       const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

       if(formattedDate)setDate(formattedDate)
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
    }
     getDate()
  },[])

  
  
    return (
      <div className="container py-4 mx-auto dark:bg-slate-800 has-[p]:dark:text-white">
            <div className="container font-bold mx-auto text-center p-2 text-sm border border-slate-900 dark:border-white">
            {load?<div className="w-full h-[9px] bg-slate-300 animate-pulse rounded-md"></div>:date}
             </div>
        <>
        {isLoading? <HeaderSkel />:firstNews?.map(data=>(
         <div key={data.id}className="container p-4 flex">
          <div className="container p-2">
          <Carousel className="h-[100%]" slideInterval={5000} leftControl=" " rightControl=' '>
            <Image className="h-auto" priority={true} src={data.img[0]} width={500} height={500} alt="imae about.." />
            <Image className="h-auto" priority={true} src={data.img[1]} width={500} height={500} alt="imae about.." />
            <Image className="h-auto" priority={true} src={data.img[2]} width={500} height={500} alt="imae about.." />
          </Carousel>
          </div>
          <div className="container p-4" style={{direction:'rtl'}}>
           <div className='container  py-4'>
           <h1 className="font-bold p-2  text-orange-500">
           <Link href={{
              pathname:"news/info",
            query:{
              title:data.title.replace(/ /g,'_'),
              image:data.img[0],
              desc:data.description,
            }
            }}>{data.title}</Link>
            </h1>
            <p>
              {data.description.split(' ').slice(0,15).join(' ')}
            </p>
           </div>
          </div>
          </div>
           ))} 
          </>
      </div>
    );
  // {load ?<HeaderSkel />:
  }
 
   
  //
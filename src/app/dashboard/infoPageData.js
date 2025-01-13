"use client";
import { Card } from "flowbite-react";
import Image from "next/image";
import { useState} from "react";
import { useQuery } from "react-query";
import { fetchData } from "@/compons/fetchData/fetch";
export default function InfoPageData({searchparams,style,columns,style2,limit,collection}) {
  const [title,setTitle]=useState(searchparams.title);
  const [desc,setDesc]=useState(searchparams.desc);
  const [img,setImg]=useState(searchparams.image);

  const {data:newsData,isLoading:isNewsLoding}=useQuery({
    queryFn:()=>fetchData(collection,limit),
    queryKey:['news']
  })

  
  const transfromData=(cardTitle,cardImage,cardDesc)=>{
    if(cardTitle)setTitle(cardTitle)
      if(cardImage)setImg(cardImage)
         if(cardDesc)setDesc(cardDesc) 
  }
  return (
    <div className="container relative grid place-items-center dark:bg-slate-800">
        <div className={style2}>
           <div className="container p-2 grid place-items-center" dir="rtl">
           <Card className="p-2 grid place-items-center" 
          renderImage={()=><Image priority={true} src={img} width={500} height={500}
          alt="card image"/>}>
          <h5 className="font-bold mx-auto text-orange-500">{title.replaceAll('_',' ')}</h5>
          <p className="text-gray-500 text-sm text-center dark:text-slate-300">
           {desc}
          </p>
        </Card>
           </div>
           <div className={columns} dir="rtl">
            {newsData?.map(data=>(
              <Card key={data.id} className={style}
              renderImage={()=><Image priority={true} src={data.category=="n1"?data.img[0]:data.img} width={500} height={500}
               alt="card image"/>}>
                 <h1 className="font-bold p-2 text-orange-500 hover:text-blue-500" onClick={()=>transfromData(
                  data.title,
                  data.category=="n1"?data.img[0]:data.img,
                  data.description
                  )}>
                   {data.title}
                 </h1>
               <p className="text-gray-500 text-sm text-center dark:text-slate-300">
               {data.description.split(" ").slice(0,20).join(' ')+"..."}
                 </p>
           </Card>
            ))}
           
           </div>
        </div>
     </div>
  )
}

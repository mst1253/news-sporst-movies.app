"use client"
import { Card} from "flowbite-react"; 
import Image from "next/image";
import Link from "next/link";
//import { HeaderSkel } from "../load/skeleton";
import { useQuery } from "react-query";
import { fetchData } from "../fetchData/fetch";
import { CardSkel } from "../load/skeleton";
export default function MainHero() {

  const {data:newsData2,isLoading:isN2Loading}=useQuery({
          queryFn:()=>fetchData("newsData",1,'n2'),
          queryKey:['n2']
        })
    const {data:newsData3,isLoading:isN3Loading}=useQuery({
          queryFn:()=>fetchData("newsData",1,'n3'),
          queryKey:['n3']
        })
      const {data:newsData4,isLoading:isN4Loading}=useQuery({
          queryFn:()=>fetchData("newsData",1,'n4'),
          queryKey:['n4']
      })
   
  return (
    <div className="container relative flex">
      <div className="container grid place-items-center">
        {isN2Loading?<CardSkel />:newsData2?.map(data => (
            <Card
              key={data.id}
              className="grid place-items-center text-center text-sm"
              renderImage={() => (
                <Image
                  className="w-auto h-auto"
                  priority={true}
                  src={data.img}
                  width={500}
                  height={500}
                  alt="image"
                />
              )}
            >
              <h2 className="font-bold text-orange-500">
              <Link href={{
              pathname:"news/info",
            query:{
              title:data.title.replace(/ /g,'_'),
              image:data.img,
              desc:data.description,
               }
              }}>{data.title}</Link>
              </h2>
              <p>{data.description.split(' ').slice(0,15).join(' ')+"..."}</p>
            </Card>
          ))}
      </div>
      <div className="container grid">
        {isN3Loading?<CardSkel />:newsData3?.map((data) => (
            <Card
              key={data.id}
              className="backdrop:grid place-items-center text-center text-sm"
              renderImage={() => (
                <Image
                  className="w-auto h-auto"
                  priority={true}
                  src={data.img}
                  width={500}
                  height={500}
                  alt="image"
                />
              )}
            >
              <h2 className="font-bold text-orange-500">
              <Link href={{
              pathname:"news/info",
               query:{
              title:data.title.replace(/ /g,'_'),
              image:data.img,
              desc:data.description,
                }
                }}>{data.title}</Link>
              </h2>
              <p>{data.description.split(' ').slice(0,15).join(' ')+"..."}</p>
            </Card>
          ))}
        {isN4Loading?<CardSkel />:newsData4?.map((data) => (
            <Card
              key={data.id}
              className="backdrop:grid place-items-center text-center text-sm"
              renderImage={() => (
                <Image
                  className="w-auto h-auto"
                  priority={true}
                  src={data.img}
                  width={500}
                  height={500}
                  alt="image"
                />
              )}
            >
              <h2 className="font-bold text-orange-500">
              <Link href={{
              pathname:"news/info",
               query:{
                title:data.title.replace(/ /g,'_'),
                image:data.img,
                 desc:data.description,
                }
                }}>{data.title}</Link>
              </h2>
              <p>{data.description.split(' ').slice(0,15).join(' ')+"..."}</p>
            </Card>
          ))}
      </div>
    </div>
  );
}


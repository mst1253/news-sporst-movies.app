import { Card } from "flowbite-react"
import {BsCamera} from 'react-icons/bs'
export  function CardSkel() {
  return (
        <div role="status" className="animate-pulse">
          <Card className="h-49  bg-gray-300 dark:bg-gray-700 grid place-items-center">
          <div className="w-full h-36 bg-gray-300 dark:bg-gray-700 grid place-items-center">
          <BsCamera />
          </div>
         <h5 className="h-2.5 w-48 bg-gray-200 rounded-full dark:bg-gray-700"></h5>
         <h5 className="h-2.5 w-48 bg-gray-200 rounded-full dark:bg-gray-700"></h5>
         <h5 className="h-2.5 w-48 bg-gray-200 rounded-full dark:bg-gray-700"></h5>
         <h5 className="h-2.5 w-48 bg-gray-200 rounded-full dark:bg-gray-700"></h5>
         <h5 className="h-2.5 w-48 bg-gray-200 rounded-full dark:bg-gray-700"></h5>
          </Card>
         </div>
  )
}

export function MovieSkel(){
  return(
    <div className="relative grid place-items-center p-2 items-center w-36 h-40 bg-gray-300 animate-pulse">
            <span className="absolute h-[40px]  w-[40px] -my-4 bottom-0 right-0 bg-gray-300 rounded-full flex justify-center items-center"></span>
            <h3 className="absolute h-[5px] w-[20px] bg-gray-300 rounded-full"></h3>
          </div>
  )
}

export function MovieSkel2(){
    return(
        <div className="relative grid place-items-center my-11 gap-2 p-4 animate-pulse">
        <span className="absolute w-[130px] h-[100px] bg-gray-300"></span>
        <h3 className="absolute h-[8px] w-[80px] bg-gray-300 rounded-full"></h3>
        </div>
    )
  }

  export function  HeaderSkel(){
    return(
         <div className="container p-4 flex justify-between animate-pulse mx-auto">
          <div className="container p-4">
            <span className="absolute w-[25rem] h-[8rem] bg-gray-300 rounded-lg"></span>
          </div>
          <div className="container p-4">
           <div className='container grid gap-4'>
           <h1 className="w-full h-[5px] bg-gray-300"></h1>
           <h1 className="w-full h-[5px] bg-gray-300"></h1>
           <h1 className="w-full h-[5px] bg-gray-300"></h1>
           <h1 className="w-full h-[5px] bg-gray-300"></h1>
           <h1 className="w-full h-[5px] bg-gray-300"></h1>
           <h1 className="w-full h-[5px] bg-gray-300"></h1>
           </div>
          </div>
        </div>
    );
  }

  export function DahbordSkel(){
    <div className="container">
      <div className="container p-11 grid gap-4 animate-pulse">
       <div className="w-[200px] h-[150px] bg-gray-300 "></div>
        </div>
        <h1 className="w-full h-[45px] bg-gray-300"></h1>
           <h1 className="w-full h-[5px] bg-gray-300"></h1>
           <h1 className="w-full h-[5px] bg-gray-300"></h1>
           <h1 className="w-full h-[5px] bg-gray-300"></h1>
           <h1 className="w-full h-[5px] bg-gray-300"></h1>
           <h1 className="w-full h-[5px] bg-gray-300"></h1>
      </div>
        
  }
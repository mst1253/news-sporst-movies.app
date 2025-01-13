"use client";
import { useState } from "react";
import { TextInput} from "flowbite-react"
import InputsCompons from "../inputsCompons"
export default function AddMovie() {
  const [option,setOption]=useState("choose")
  const [rate,setRate]=useState("")
  const [link,setLink]=useState("")
  const [warn,setWarn]=useState("")
  const [type,setType]=useState("")
  const text="entering this info will optimize your service"
  return (
   
      <div className="container -my-8 p-11 grid gap-10 -py-8"> 
      <select  className="container p-2 rounded-lg dark:bg-gray-600 dark:text-white" onChange={e=>setOption(e.target.value)} style={{zIndex:"1"}}>
        <option value="choose">choose which type of movie you wanna add</option>
        <option value="OM">old movies</option>
        <option value="MW">most watched</option>
        <option value="NM">new movies</option>
      </select>
      <div className="-my-20">
      {option!='choose'&&
      <InputsCompons 
      link={<TextInput placeholder="add a link for the movie" onChange={e=>setLink(e.target.value)} required title={text}/>}
      warn={<TextInput placeholder="add a warn  for the users" onChange={e=>setWarn(e.target.value)} required title={text}/>}
      type={<TextInput placeholder="add movie type" onChange={e=>setType(e.target.value)} required title={text}/>}
      placeholder="add movie title" descrip="add movie description" 
      input={option !="MW" && <TextInput placeholder="add movie rate" type="number" 
        onChange={e=>setRate(e.target.value)} required title={text} />} collectionName="moviesData"
      categories={option} rate={rate&&rate<=10&&rate}
      movieLink={link}
      movieWarn={warn}
      movieType={type}
      
     />
    }
      </div>
    </div>
    
   
  ) 
}

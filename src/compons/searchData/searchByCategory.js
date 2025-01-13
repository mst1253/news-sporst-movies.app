"use client"
import {  useState } from "react";
import { BsNewspaper } from "react-icons/bs";
import { BsFilm } from "react-icons/bs";
import { BsBalloon } from "react-icons/bs";
import DisplaySearchData from "./displaySearchData";
import { Label } from "flowbite-react";

export default function SearchByCategory() {
    const [option,setOption]=useState('')
    const [valid,setValid]=useState(false);
    const handleOptions=(e)=>{
        setOption(e.target.value)
        setValid(true);
    }
    
  return (
    <>
     <select  className="p-2 rounded-lg dark:bg-gray-600 dark:text-white"  onChange={e=>handleOptions(e)} >
     <option value="choose">choose and search for your preference</option>
          <option value="news">news</option>
          <option value="sports">sports</option>
          <option value="movies">movies</option>
     </select>
      {option!='choose'&&<DisplaySearchData valid={valid} setValid={setValid} option={option}/>}
 </>
  )
}
/*


*/

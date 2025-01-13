"use client";
import { useState } from "react";
import InputsCompons from "../inputsCompons"
export default function AddNews() {
  const [option,setOption]=useState('choose');
  return (
    <div className="container py-3 p-11 grid gap-3">
      <select defaultValue className="container rounded-lg dark:bg-gray-600 dark:text-white" onChange={e=>setOption(e.target.value)}>
      <option   value="choose">choose which news you wanna add</option>
        <option value="n1">news1</option>
        <option value="n2">news2</option>
        <option value="n3">news3</option>
        <option value="n4">news4</option>
      </select>
       {option!="choose"&&
         <InputsCompons placeholder="add news title" descrip="add news description" 
         collectionName="newsData" 
        categories={option} 
       />
      }
     
    </div>
  )
}






























          













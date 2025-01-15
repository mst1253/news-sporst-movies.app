"use client";
import { useState} from "react";
import { ref,uploadBytes,getDownloadURL } from "firebase/storage";
import {TextInput,Button,Textarea,Label,FileInput} from "flowbite-react";
import { storage } from "../db/firebase";
import {BsCamera} from 'react-icons/bs'
import { v4 } from "uuid";
import { Spinner } from "flowbite-react";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function InputsCompons(
  {placeholder,descrip,
    input,textinput,textarea,
    collectionName,categories,link,warn,movieWarn,movieLink,type,
    rate,
    movieType
  }) {
    const [src,setSrc]=useState(categories=="n1"?[]:'')
    const [title,setTitle]=useState('');
    const [desc,setDesc]=useState('');
    const [load,setLoading]=useState(null);
    const [isEmpty,setIsEmpty]=useState('');
    const [imgName,setImgName]=useState(categories=='n1'?[]:'')
   const addDataToDb = async (additionalFields = {}) => {
      const isValid =
        title &&
        src &&
        desc &&
        Object.values(additionalFields).every((field) => field);
      if (isValid) {
        setLoading(true);
        try {
          const { addDoc, collection, serverTimestamp } = await import("firebase/firestore");
          const { db } = await import("../db/firebase"); 
          const data = {
            title: title,
            description: desc,
            img:src,
            createdAt: serverTimestamp(),
          };
          if (categories)data.category = categories;
           if(rate)data.rate = rate;
          if (movieLink) data.link = movieLink;
          if (movieWarn) data.warn = movieWarn;
          if (movieType) data.type = movieType;
          await addDoc(collection(db, collectionName), data);
          alert("The informations has been successfully uploaded!");
        } catch (err) {
          console.error("Error adding document:", err);
        } finally {
          setLoading(false);
        }
      } else if(!title||!src||!desc||!Object.values(additionalFields).every((field) => !field)) {
         setIsEmpty('this field has not to be empty!')
      }
    };
    
   const handleImages=e=>{
      const file=e.target.files
      if(file.length==1){
        let oneFile=file[0]
        setImgName((prev)=>prev=oneFile)
       const img=ref(storage,`images/${oneFile.name + v4()}`)
       uploadBytes(img, oneFile).then(snap=>{
        getDownloadURL(snap.ref).then(url=>{
         setSrc(url)
        })
       })
      }
      else if(file.length==3){
        setImgName([])
         for(let n=0;n<file.length;n++){
          setImgName(((prev)=>[...prev,file[n]]))
          const img=ref(storage,`images/${file[n].name + v4()}`)
          uploadBytes(img, file[n]).then(snap=>{
           getDownloadURL(snap.ref).then(url=>{
            setSrc((prev)=>[...prev,url])
           })
          })
         }
      }
      else{
        alert('one image for all fields three images allowed for news1!')
      }
     }
     let content;
      if (Array.isArray(imgName)) {
        if (imgName.length === 0) {
          content = <BsCamera size={30} className="text-orange-600 dark:text-blue-500" />;
        } else {
          content = imgName.map((name, index) => (
            <div key={index} className="flex gap-2 text-white">
              {name.name}
              <IoIosCheckmarkCircle color="lightgreen" size={20} />
            </div>
          ));
        }
      } else if (!Array.isArray(imgName)) {
          if (!imgName) {
          content = <BsCamera size={30} className="text-orange-600 dark:text-blue-500" />;
        } else {
          content = (
            <div className="flex gap-2 text-white">
              {imgName.name}
              <IoIosCheckmarkCircle fill="lightgreen" size={20} />
            </div>
          );
        }
      }
  return (
    <div className="container">
      {load?<div className="grid place-items-center"><Spinner aria-label="data is loading"/></div>:
      <h1></h1>}
      <form className="container p-11 grid gap-4">
       <Label className='h-36 bg-gray-700 grid place-items-center' htmlFor="dropzone" >
        <FileInput id='dropzone'  className="hidden" onChange={e=>handleImages(e)} multiple={categories=="n1"?true:false} required/>
        {content}
        </Label>
        <TextInput placeholder={placeholder} onChange={e=>setTitle(e.target.value.split(' ').slice(0,3).join(' '))} 
        required title="entering this info will optimize your service" /> 
        {title==''&&<h2 className="text-red-600 text-xs">{isEmpty}</h2>}
        <Textarea placeholder={descrip}  onChange={e=>setDesc(e.target.value)} required title="entering this info will optimize your service"/> 
        {desc==''&&<h2 className="text-red-600 text-xs">{isEmpty}</h2>}
        {link}
        {movieLink==''&&<h2 className="text-red-600 text-xs">{isEmpty}</h2>}                                                                                                                                                                         
        {warn}
        {movieWarn==''&&<h2 className="text-red-600 text-xs">{isEmpty}</h2>}      
        {type}
        {movieType==''&&<h2 className="text-red-600 text-xs">{isEmpty}</h2>}      
        {input}
        {textinput}
        {categories!='MW'&&rate==''&&<h2 className="text-red-600 text-xs">{isEmpty}</h2>}  
        {textarea}
        <Button className="bg-orange-500"
       onClick={()=>link==undefined?addDataToDb():addDataToDb({movieLink,movieWarn,movieType,rate})}> 
        upload</Button>
      </form>
    </div>
  )
}

"use client"
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

function ImageSelector({selectedImage}) {
  const [file, setFile] = useState(); 
  const onFileSelected = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0])
    selectedImage(e.target.files[0])

  }

  return (
    <div>
        <label>Select Image of your room</label>
        <div className='mt-3 '>
            <label htmlFor="upload-image">
                <div className={`p-28 border rounded-xl border-dotted flex justify-center border-purple-500 bg-slate-200 cursor-pointer hover:shadow-lg ${file&& 'p-0 bg-white'}`}>
                   {!file ? (




                      <Image src="/imageupload.png" width={70} height={70} />
                   ) : (
                      <Image src={URL.createObjectURL(file)} width={70} height={70} className='w-[300px] h-[300px] object-cover' />
                   )}
                </div>
            </label>
            <input 
              type="file" 
              accept="image/*" 
              id="upload-image" 
              style={{display: 'none'}} 
              onChange={onFileSelected}
            />
        </div>
    </div>
  );
}

export default ImageSelector;

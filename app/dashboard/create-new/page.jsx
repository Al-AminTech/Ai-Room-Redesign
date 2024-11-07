"use client"
import React, { useState } from "react";
import ImageSelector from "./_component/ImageSelector";
import RoomType from "./_component/RoomType";
import DesignType from "./_component/DesignType";
import AdditionalReq from "./_component/AdditionalReq";
import { Button } from "@/components/ui/button";

function CreateNew() {
  const [formdata, setFormData] = useState([])
  const onHandleInputChange = (value, fieldName) => {
    setFormData(prev=> ({
      ...prev,
      [fieldName]:value
    }))
    console.log(formdata);
  };
  return (
    <div>
      <h2 className="font-bold text-4xl text-purple-500 text-center">
        Experience the Magic of AI Remodeling
      </h2>
      <p className="text-center text-gray-500">
        Transform any room with a click. Select a space, choose a style, and
        watch as AI instantly reimagines your environment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2   mt-10 gap-10">
        <ImageSelector
          selectedImage={(value) => onHandleInputChange(value, "image")}
        />
        <div>
          <RoomType selectedRoomType={(value) => onHandleInputChange(value, 'roomType')}/>
          <DesignType selectedDesignType={(value) => onHandleInputChange(value, 'designType')}/>
          <AdditionalReq additionalRequirementInput={(value) => onHandleInputChange(value, 'additionalReq')}/>
            <Button className="w-full mt-5">Generate</Button>
            <p className="text-sm text-gray-400 mb-52">NOTE: 1 Credit  will use to redesign your room</p>
        </div>
      </div>
    </div>
  );
}

export default CreateNew;

"use client"
import UserDetailsContext from "@/app/_context/UserDetailscontext";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React, { useContext } from "react";

function Header() {
    const {userDetail, setUserDetail} = useContext(UserDetailsContext)



  return (
    <div className="p-5 shadow-sm flex justify-between items-center">
      <div className="flex gap-2  items-center">
        <Image src={"/logo.svg"} width={40} height={40} />
        <h2 className="font-bold text-lg">AI Room Design</h2>
      </div>
      <Button variant={"ghost"} className="rounded-full text-purple-500">Buy More Credits</Button>
      <div className="flex gap-7 items-center">
        <div className="flex gap-2 p-1 items-center bg-slate-200 px-3 rounded-full">
            <Image src={"/star.png"} width={20} height={20}/>
            <h2>{userDetail?.credits}</h2>
        </div>
        <UserButton/>
      </div>
    </div>
  );
}

export default Header;

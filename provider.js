"use client"
import React, { useEffect, useState } from 'react'
import {useUser} from "@clerk/nextjs"
import axios from "axios"
import UserDetailsContext from "@/app/_context/UserDetailscontext"

function Provider({children}) {
    const {user} = useUser();
    const [userDetail, setUserDetail] =  useState([])
    useEffect(() => {
        user&&VerifyUser();
    }, [user])
    const VerifyUser = async()=>{
        const dataResult = await axios.post('/api/verify-user', {
          user:user
        });
        setUserDetail(dataResult.data.result)
        console.log(dataResult.data);
    }
  return (
  <UserDetailsContext.Provider value={{userDetail, setUserDetail}}>
      <div>
       {children} 
      </div>
  </UserDetailsContext.Provider>
  )
}

export default Provider
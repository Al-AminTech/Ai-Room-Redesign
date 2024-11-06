"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState } from "react";

function Listing() {
  const { user } = useUser();
  const [userRoomList, setUserRoomList] = useState([]);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-3xl">Hello, {user?.fullName}</h2>
        <Link href={"/dashboard/create-new"}>
        <Button className="mt-5">+Redesign Room</Button>
      </Link>
      </div>
      {userRoomList?.length === 0 ? (
        // Empty state
        <div>{/* Add empty state content here */}</div>
      ) : (
        <div>{/* Content for when userRoomList has items */}</div>
      )}
    </div>
  );
}

export default Listing;

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
function EmptyState() {
  return (
    <div className="flex justify-center items-center mt-10 flex-col ">
      <Image src={"/placeholder.png"} width={200} height={200} />
      <h2 className="font-medium text-xl text-gray-500">
        Create New AI Interior Design for your room
      </h2>
      <Link href={"/dashboard/create-new"}>
        <Button className="mt-5">+Redesign Room</Button>
      </Link>
    </div>
  );
}

export default EmptyState;

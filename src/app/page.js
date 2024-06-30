'use client'
import { GlobalContext } from "@/Context/AppContext";
import { Home2 } from "@/components/Home";
import { Create } from "@/components/Home/Create";
import { Menu } from "@/components/Home/menu";
import { useGetUserId } from "@/hooks/useGetUserId";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const {isAuthenticate} = GlobalContext()
  const data = useGetUserId()
  console.log(data)
  //const [isAuthenticate,setIsAuthenticate] = useState(false)
  return (
    <main className="flex min-h-screen flex-col bg-[#d1d1d1] items-center justify-between ">
      {isAuthenticate ? <Home2 /> : <Create />}
    </main>
  );
}

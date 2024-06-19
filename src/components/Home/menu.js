"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoHome } from "react-icons/io5";




export const Menu = () => {
   const [isHome, setIsHome] = useState(true)
  
    const router = useRouter()
    const handleCopy = (value) => {
      navigator.clipboard.writeText(value).then(
        () => {
          // Successfully copied to clipboard
          setCopy(true);
          setTimeout(  () => 
            setCopy(false),
            1000)
          alert('address copied to clip Board')
        },
        (err) => {
          // Failed to copy to clipboard
          console.error('Could not copy address: ', err);
        }
      );
    }
    const handleCopy2 = (value) => {
      navigator.clipboard.writeText(value).then(
        () => {
          // Successfully copied to clipboard
          console.log('Address copied to clipboard');
          alert('address copied to clip Board')
          
        },
        (err) => {
          // Failed to copy to clipboard
          console.error('Could not copy address: ', err);
        }
      );
    }
    return (
      <>
        {/**for mobile view **/}
        
        {/**for desktop view **/}
        <div
          style={{ "backdrop-filter": "blur(12px)" }}
          className=" w-[90%] ml-auto mr-auto rounded-full bg-s-gray-300/5 py-1 px-1.5 z-100 mt-[730px]  fixed inset-x-0 top-2 flex justify-center items-center"
        >
          <div className="lg:py-2.5 py-1.5 lg:px-2.5 px-1.5  mt-auto mb-auto ml-auto mr-auto w-[98%] flex flex-row  h-[90%]">
            <div className="h-12 ml-auto mr-auto w-[30%] bg-white/10 flex items-center justify-center">
                <IoHome size={28} />
            </div>
            <div className="h-10 w-[30%] ml-auto mr-auto bg-white">
                <p>Hey</p>
            </div>
            <div className="h-10 w-[30%] ml-auto mr-auto bg-white">
                <p>Hey</p>
            </div>
          </div>          
        </div>
      </>
    );
  };
import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="">
     <div className="w-full max-w-[600px] h-[480px] bg-[url('/background.png')] bg-cover bg-center mt-[14px] relative md:py-15 py-20">
             <div className="w-92 md:w-94 h-12 px-2">
               <h2 className="text-[36px] font-bold text-white">
                 Elevate Your Space
               </h2>
             </div>
     
             <div className="w-52 h-41 space-y-12 mx-3 py-16">
               <div className="w-52 h-25">
                 <p className="font-extrabold">
                   Discover exquisite furniture and decor to transform your home into
                   a sanctuary of style and comfort.
                 </p>
               </div>
     
               <div className="w-26 h-10 bg-[#1CC8F8] text-black font-bold rounded-[8px] text-center justify-center flex items-center">
                 <Link href="" className="">
                   Shop Now
                 </Link>
               </div>
             </div>
           </div>
    </div>
  );
}

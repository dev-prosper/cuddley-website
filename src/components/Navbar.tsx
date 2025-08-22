"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';



export default function Navbar() {
      const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  return (
    <div className=''>
        <div className="w-full max-w-[600px] h-[61px] mt-[42px] flex flex-row justify-between">
            <div className="relative w-[190px] max-w-[240px]  h-[35px] my-[10px] mid:bg-green-500">
              <Link href="/">
               <Image src="/Logo (3).png" alt='Cuddley Interior Logo' fill className='object-contain'/>
              </Link>
            </div>

            <div className="w-[140px] h-[25px] my-[14px] flex flex-row justify-between">
              <Image className='cursor-pointer' src="/Favorite icon.png" alt='Favorite icon' width={24} height={24} /> 
              <Image className='cursor-pointer' src="/Cart icon.png" alt='Cart Icon' width={22} height={22} />
               {isMobileNavbarOpen ? (
          <Image src="/Close menu.png" alt='Close Menu Icon' width={24} height={24} className="cursor-pointer" onClick={() => setIsMobileNavbarOpen(false)} />
        ) : (
          <Image src="/Menu icon.png" alt='Menu Icon' width={24} height={24}
            className="cursor-pointer"
            onClick={() => setIsMobileNavbarOpen(true)}
          />
        )}
            </div>

            
        </div>
    </div>
  )
}

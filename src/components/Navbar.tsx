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
            <div className="relative w-[190px] md:w-[240px]  h-[35px] my-[10px] mid:bg-green-500">
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

        <div className={`w-[375px] h-[650px] bg-[#0A0A11] left-0 md:left-[420px] md:w-[600px]  ${
            isMobileNavbarOpen ? "flex flex-col absolute " : "hidden"
        }`}>
            <div className="bg-[#1C1F26] ml-[8px]  rounded-[12px] h-[48px] w-[355px] md:w-[570px] md:mx-[15px] flex flex-row justify-between">
                <div className="md:w-[240px] w-[94px] h-[23px] my-[13px] ml-[18px]">
                    <Image src="/Logo 1.png" alt='Cuddleys Interior Logo' width={94} height={23} />
                </div>

                <div className="mx-[14px] my-[12px]">
                    <Image src="/Close menu.png" alt='Close Menu Icon' width={24} height={24} className="cursor-pointer" onClick={() => setIsMobileNavbarOpen(false)} />
                </div>
            </div>

            <div className="w-[330px] md:w-[540px] h-[540px] mt-[40px] mx-[15px] md:mx-[20px] flex flex-col gap-[30px]">
                <div className="w-[330px] md:w-[540px] h-[64px]">
                    <Link href="/" className='' onClick={() => setIsMobileNavbarOpen(false)}>
                      <h3 className='w-[130px] h-[30px] text-white font-bold text-[20px]'>All Products</h3>
                    </Link>
                    <div className="w-[320px] md:w-[530px] h-[2px] bg-gray-400 mt-[30px] "></div>
                </div>

                <div className="w-[330px] md:w-[540px] h-[64px]">
                    <Link href="/" className='' onClick={() => setIsMobileNavbarOpen(false)}>
                      <h3 className='w-[130px] h-[30px] text-white font-bold text-[20px]'>Categories</h3>
                    </Link>
                    <div className="w-[320px] md:w-[530px] h-[2px] bg-gray-400 mt-[30px] "></div>
                </div>

                <div className="w-[330px] md:w-[540px] h-[64px]">
                    <Link href="/" className='' onClick={() => setIsMobileNavbarOpen(false)}>
                      <h3 className='w-[130px] h-[30px] text-white font-bold text-[20px]'>About Us</h3>
                    </Link>
                    <div className="w-[320px] md:w-[530px] h-[2px] bg-gray-400 mt-[30px] "></div>
                </div>

                <div className="w-[330px] md:w-[540px] h-[64px]">
                    <Link href="/" className='' onClick={() => setIsMobileNavbarOpen(false)}>
                      <h3 className='w-[130px] h-[30px] text-white font-bold text-[20px]'>Services</h3>
                    </Link>
                    <div className="w-[320px] md:w-[530px] h-[2px] bg-gray-400 mt-[30px] "></div>
                </div>

                <div className="w-[330px] md:w-[540px] h-[64px]">
                    <Link href="/" className='' onClick={() => setIsMobileNavbarOpen(false)}>
                      <h3 className='w-[130px] h-[30px] text-white font-bold text-[20px]'>Support</h3>
                    </Link>
                    <div className="w-[320px] md:w-[530px] h-[2px] bg-gray-400 mt-[30px] "></div>
                </div>

                <div className="w-[330px] md:w-[540px] h-[64px]">
                    <Link href="/" className='' onClick={() => setIsMobileNavbarOpen(false)}>
                      <h3 className='w-[130px] h-[30px] text-white font-bold text-[20px]'>Cart</h3>
                    </Link>
                    <div className="w-[320px] md:w-[530px] h-[2px] bg-gray-400 mt-[30px] "></div>
                </div>

                <div className="w-[330px] md:w-[540px] h-[64px]">
                    <Link href="/" className='' onClick={() => setIsMobileNavbarOpen(false)}>
                      <h3 className='w-[130px] h-[30px] text-white font-bold text-[20px]'>Track Order</h3>
                    </Link>
                    <div className="w-[320px] md:w-[530px] h-[2px] bg-gray-400 mt-[30px] "></div>
                </div>
            </div>
        </div>
            </div>

            
        </div>
    </div>
  )
}

"use client";

import React from "react";

type MaxWidthContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function MaxWidthContainer({ children, className }: MaxWidthContainerProps) {
  return (
    <div className="flex justify-center bg-[#ffffff] min-h-screen">
      <div className={`w-full max-w-[600px] bg-[#0A0A11] shadow-2xl ${className}`}>
        {children}
      </div>
    </div>
  );
}

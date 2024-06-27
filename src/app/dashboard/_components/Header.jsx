"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {
    const path=usePathname();
    useEffect(()=>{
        console.log(path);
    },[])
  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      <a href="/">
        <Image src={"/logo.svg"} width={80} height={80} alt="logo" />
      </a>
      <ul className="hidden md:flex gap-6">
        <li>
          <a
            href="/dashboard"
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path == "/dashboard" && "text-primary font-bold"
            }`}
          >
            Dashboard
          </a>
        </li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header

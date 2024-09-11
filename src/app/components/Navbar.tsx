"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";


export default function Navbar(){




      return (
        <div className={`navbar px-[10%] border-b border-[#454546] py-3 absolute z-2 w-full z-10  `}>
            <div className="nav-layout flex justify-between w-full ">
                <div className="nav-logo">
                    <Link href="/">
                        <Image src='/imgs/Logo.png' height={166} width={166} alt="logo"></Image>
                    </Link>
                </div>
                <div className="nav-links flex items-center text-white gap-8">
                    <Link href="/rendez-vous" >
                        <p className="pointer bav">Nos designers</p>
                    </Link>
                    <Link href="/rendez-vous" >

                    <p className="pointer bav">Prendre rendez-vous</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
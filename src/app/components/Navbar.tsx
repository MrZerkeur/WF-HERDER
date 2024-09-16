"use client"
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
// import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navanm from "./Nanm";


export default function Navbar(){
    const pathname: string = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const textColor = (route: string): string => {
        switch(route) {
          case '/':
            return 'white'; 
          default:
            return 'black'; 
        }
    }
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

      return (
        <div className={`navbar px-[10%] border-b border-[#454546] py-3 absolute z-2 w-full z-10  `}>
            <div className="nav-layout flex justify-between w-full ">
                <div className="nav-logo">
                    <Link href="/">
                        <Image src='/imgs/Logo.png' height={166} width={166} alt="logo"></Image>
                    </Link>
                </div>
                <div className="nav-links flex items-center text-white gap-8 desktop">
                    <Link href="/nos-designers" >
                        <p className="pointer bav" style={{ color: textColor(pathname) }}>Nos designers</p>
                    </Link>
                    <Link href="/rendez-vous" >

                        <p className="pointer bav" style={{ color: textColor(pathname) }}>Prendre rendez-vous</p>
                    </Link>
                </div>
                
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="#19967D"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      
      {isMenuOpen && (
        <div className="mobile-menu border-b border-[#454546] md:hidden z-50  bg-black text-white w-full py-5 absolute top-16 left-0 z-20">
          <div className="flex flex-col pl-[10%] items-start gap-6">
            <Link href="/nos-designers" onClick={toggleMenu}>
              <p className="pointer text-white bav">Nos designers</p>
            </Link>
            <Link href="/rendez-vous" onClick={toggleMenu}>
              <p className="pointer text-white bav">Prendre rendez-vous</p>
            </Link>
          </div>
        </div>
      )}
            </div>
        // </div>
    );
}
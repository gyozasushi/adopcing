import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/logokucing.png";
import { navigations } from "./navbar.data";
import Link from "next/link";
import Icon from "@/ui/icons/icons";

export default function Navbar() {
   const [isMobileOpen, setMobileOpen] = useState(false);
   const [isScrolled, setScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 0);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <nav
         className={`fixed top-0 w-full z-0 transition-colors duration-600 ${
            isScrolled ? "bg-gray-100 text-black " : "bg-white text-black"
         }`}
      >
         <div className="max-w-7xl mx-auto px-4 ">
            <div className="flex justify-between items-center h-16">
               {/* Mobile toggle menu button */}
               <div className="md:hidden flex items-center">
                  <button
                     onClick={() => setMobileOpen(!isMobileOpen)}
                     className="text-black"
                  >
                     <div className="space-y-1.5">
                        <span className="block w-6 h-0.5 bg-black"></span>
                        <span className="block w-3 h-0.5 bg-black"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                     </div>
                  </button>
               </div>

               {/* Mobile slide menu */}
               <div
                  className={`fixed top-0 left-0 w-3/4 max-w-sm h-full bg-gray-200 shadow-lg z-50  transform ${
                     isMobileOpen ? "translate-x-0" : "-translate-x-full"
                  } transition-transform duration-300 ease-in-out`}
               >
                  <div className="flex flex-col space-y-4 p-4 ">
                     <button
                        onClick={() => setMobileOpen(false)}
                        className="self-end text-black text-lg border border-black px-2 rounded-lg "
                     >
                        ✖
                     </button>
                     {navigations.map(({ label, path }) => (
                        <Link
                           onClick={() => setMobileOpen(false)}
                           key={label}
                           href={path}
                           className="block px-4 py-2 text-gray-800 hover:bg-gray-300 rounded-md"
                        >
                           {label}
                        </Link>
                     ))}
                  </div>
                  <div className="flex absolute mx-7 bottom-4 cursor-pointer">
                     <Icon.Instagram />
                     <Icon.Facebook />
                     <Icon.Whatsapp />
                     <Icon.TikTok />
                  </div>
               </div>

               {/* Logo */}
               <div className="flex-shrink-0">
                  <Image src={logo} alt="logo" width={50} />
               </div>

               {/* Desktop menu */}
               <ul className="hidden md:flex items-center space-x-4">
                  {navigations.map(({ label, path }) => (
                     <li key={label}>
                        <Link
                           href={path}
                           className=" relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:top-5 after:w-full after:h-[10px] after:bg-[url('/assets/headline-curve.svg')] after:bg-contain after:bg-no-repeat after:scale-x-0 hover:after:scale-x-100 "
                        >
                           {label}
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </nav>
   );
}

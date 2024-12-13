import React from "react";
import Image from "next/image";
import logo from "@/assets/logo-nav/logocat.png"
import { navigations } from "./navbar.data";
import Link from "next/link";

export default function Navbar(){

    
    return(
        <nav>
            <div className="max-w-7xl mx-auto px-4 border border-white ">
                <div className="flex space-x-30 ">
                    <div className="flex-shrink-0  ">
                        <Image
                        src={logo}
                        alt="logo"
                        width={50}
                        />
                    </div>
                    <div className="flex items-center justify-center  h-16 ">
                        {/* logo */}
                        <div className="flex space-x-3 ">
                            {navigations.map(({label,path})=>(
                                <div 
                                className="" 
                                key={label}
                                >
                                    <Link 
                                        href={path} 
                                        className="relative text-md font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:top-5 after:w-full after:h-[10px] after:bg-[url('/assets/headline-curve.svg')] after:bg-contain after:bg-no-repeat after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                                    >
                                        {label}
                                    </Link>

                                </div>  
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
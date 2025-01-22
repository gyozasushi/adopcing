"use client"
import React, { useState,useRef } from "react";
import Image from "next/image";
import HeroImage from "@/assets/kucing.png";
import Container from "../components/layout/container";
import Sectionduwa from "./section2";

export default function Home() {
  
      const eyeRefs = useRef([]);

      const handlemousemove = (e) =>{
        eyeRefs.current.forEach((eye)=>{
          const rect = eye.getBoundingClientRect();
          const eyeCenterX = rect.left + rect.width / 2;
          const eyeCenterY = rect.top + rect.height / 2;
           const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);

      // ini buat hitung posisi pupil terhadap mata
            const distance = Math.min(rect.width / 5, rect.height / 5); // Batas gerakan pupil
            const pupilX = distance * Math.cos(angle);
            const pupilY = distance * Math.sin(angle);

            // ngatur posisi pupil
            const pupil = eye.querySelector(".pupil");
            pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        })
      }
  return (
      <div className="border border-black border border-black h-[90rem] "
         onMouseMove={handlemousemove}
      >
        <section
          className="flex flex-col sm:justify-center sm:h-35 sm:flex-row my-[10rem] sm:space-x-10"
          
        >
          {/* Elemen pertama */}
          <div className="w-3/4 sm:w-2/4 sm:pt-20">
            <h1 className="text-6xl font-nunito font-bold ">Welcome To Adopcing.</h1>
            <p className="mt-10">
              Rumah bagi mereka yang peduli dan mencintai kucing.
              Temukan sahabat berbulu yang siap diadopsi atau pilih makanan terbaik untuk menjaga kucing kesayangan Anda tetap sehat dan bahagia. 
              Bersama, kita menciptakan dunia yang lebih baik untuk mereka.
            </p>
            <button className="mt-7 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all font-bold">
              Sign Up
            </button>
          </div>

          {/* Elemen kedua */}
          <div className="relative z-[-1] pt-0 h-full "
          >
            {/* mata kanan */}
            <div className="absolute  w-12 h-14 bg-white border rounded-full border-black flex items-center justify-center top-[45%] left-[33%] sm:left-[35%] "
              ref={(el) => (eyeRefs.current[0] = el)} // Referensi mata pertama
            >
                <div className="pupil w-5 h-5 bg-black rounded-full transition-transform duration-75"></div>
            </div>
            <div className="absolute w-12 h-14 bg-white border rounded-full border-black flex items-center justify-center top-[45%] left-[53%] sm:left-[55%]"
              ref={(el) => (eyeRefs.current[1] = el)} // Referensi mata pertama
            >
                <div className="pupil w-5 h-5 bg-black rounded-full transition-transform duration-75"></div>
            </div>
            {/* Gambar*/}
            <Image
              className="object-cover h-full w-full"
              src={HeroImage}
              alt="miaw"
            />
          </div>
        </section>
        {/* section kedua */}
        <Sectionduwa/>
      </div>
  );
}

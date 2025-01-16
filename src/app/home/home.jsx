import React from "react";
import Image from "next/image";
import HeroImage from "@/assets/kucing.png";
import Box from "../components/layout/box";
import Container from "../components/layout/container";
import FeedCat from "../components/feeding/feedcat";

export default function Home() {
  return (
    <Container>
      <div className=" flex flex-col sm:justify-center sm:h-[25rem] sm:flex-row my-[10rem] sm:space-x-10">
        {/* Elemen pertama */}
        <div className=" w-3/4 sm:w-2/4 sm:pt-20">
          <h1 className="text-6xl font-bold ">
            Welcome To Adopcing.
          </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            enim autem fugiat eligendi maxime reprehenderit quam a quos deleniti
            el?leratsum dot amer liza god go then rest asu remmrmemer
          </p>
          <button  className="mt-7 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all font-bold">
            Sign Up
          </button>
        </div>   

        {/* Elemen kedua */}
   
        <div className="border border-black  pt-0 h-full">
          <Image
            className=" object-cover h-full w-full"
            src={HeroImage}
            alt="herokucing"
          />
        </div>
      </div>
    </Container>
  );
}

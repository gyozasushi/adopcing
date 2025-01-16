"use client"
import React, { useState } from "react";
import Image from "next/image";
import kucing from "@/assets/kucing.gif";
import tempatmakan from "@/assets/tempatmakan.png";

export default function FeedCat() {
  const [isFeeding, setIsFeeding] = useState(false); // Status makan
  const [catPosition, setCatPosition] = useState("right-0"); // Posisi kucing
  const [isMirrored, setIsMirrored] = useState(false); // Status mirroring

  const handleFeedClick = () => {
    if (!isFeeding) {
      setIsFeeding(true); // Kucing mulai bergerak
      setCatPosition("right-[73%]"); // Posisikan kucing dekat tempat makan

      // Setelah makan selesai, kucing kembali
      setTimeout(() => {
        setCatPosition("right-0"); // Kembali ke posisi awal
        setIsMirrored(true); // Mirrored kucing
        setIsFeeding(false); // Selesai makan

        // Setelah kembali ke posisi semula, balikkan efek mirroring 
        setTimeout(() => {
          setIsMirrored(false); // Kucing tidak mirrored
        }, 500); // Tunggu sebentar sebelum kucing kembali normal
      }, 5000); // Total waktu sebelum kucing kembali (5 detik)
    }
  };

  return (
    <div className="relative border border-black p-10 w-full h-[9rem] overflow-hidden flex items-center">
      {/* Tempat Makan */}
      <div
        className="absolute left-10 cursor-pointer"
        onClick={handleFeedClick} // Klik untuk memulai animasi 
      >
        <Image
          className=""
          src={tempatmakan}
          alt="tempatmakan"
          width={60}
        />
      </div>

      {/* Kucing */}
      <Image
        className={`absolute ${catPosition}  ${
          isFeeding ? "animate-walk" : ""
        } ${isMirrored ? "scale-x-[-1] transition-transform duration-[0ms]" : "transition-transform duration-[0ms]"}`} // Transisi scale-x terpisah
        src={kucing}
        alt="kocheng"
        width={60}
      />

      {/* Pesan Selesai Makan */}
      { catPosition === "right-[73%]" && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center bg-white p-2 border rounded-md">
          Kucing sedang makan...
        </div>
      )}
    </div>
  );
}

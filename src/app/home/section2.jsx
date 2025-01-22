import React from "react";
import Image from "next/image"; // Import tag Image bawaan Next.js

export default function Sectionduwa() {
  return (
    <section className="rounded-lg w-full sm:h-45 bg-gray-100 pt-0">
      <div className="text-center space-y-10 p-8 sm:mx-20">
        <h1 className="text-4xl font-bold">Apa Itu Adopcing?</h1>
        <p className="text-md">
          Adopsi kucing adalah langkah mulia untuk memberikan rumah baru dan penuh kasih kepada kucing yang membutuhkan. Melalui website kami, proses adopsi menjadi lebih mudah, transparan, dan terpercaya. Alih-alih membeli kucing dari pet shop, Anda dapat memilih untuk mengubah hidup kucing-kucing yang membutuhkan perhatian, cinta, dan keluarga baru.
          <br />
          Website kami dirancang untuk menghubungkan Anda dengan kucing-kucing yang siap diadopsi dari berbagai penampungan hewan terpercaya. Setiap kucing di platform kami telah melalui proses pemeriksaan kesehatan, vaksinasi, dan penilaian perilaku untuk memastikan kecocokan dengan calon pengadopsi. Kami juga menyediakan panduan perawatan dan konsultasi untuk mendukung Anda selama proses adopsi dan setelahnya.
        </p>
      </div>
      <div className="grid w-full grid-cols-6 gap-4">
        {[
          "/assets/shelter/shelter1.jpg",
          "/assets/shelter/shelter2.jpg",
          "/assets/shelter/shelter3.jpg",
          "/assets/shelter/shelter4.jpg",
        ].map((src, index) => (
          <div
            key={index}
            className="w-full h-[13rem] flex justify-center relative"
          >
            <Image
              src={src} // Path gambar
              alt={`Shelter ${index + 1}`} // Alt text untuk aksesibilitas
              fill // Membuat gambar memenuhi div parent
              className="object-cover rounded-full transform-scale-100" // Styling gambar
              sizes="(max-width: 768px) 100vw, 50vw" // Mengoptimalkan ukuran gambar untuk perangkat
            />
          </div>
        ))}
      </div>
    </section>
  );
}

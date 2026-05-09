"use client";
import React from "react";
import Image from "next/image";
import ImageBox from "@/components/ImageBox";
import { useState, useEffect } from "react";
import { GrNext, GrPrevious, GoCircle } from "react-icons/gr";

export default function ImageSlider() {
  const images = [
    "/images/bleach-thousand.png",
    "/images/ken-takakura.png",
    "/images/samurai-silhouette.png",
    "/images/taro-sakamoto.png",
  ];
  const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => {
      return (prev + 1) % images.length;
    });
  }, 3000);

  return () => clearInterval(interval);
}, []);

  function prevImage() {
    setIndex((prev) => {
      return (prev - 1 + images.length) % images.length;
    });
  }

  function nextImage() {
    setIndex((prev) => {
      return (prev + 1) % images.length;
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white/40 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/30">
        <div className="overflow-hidden rounded-2xl ">
          <ImageBox image={images[index]} />
        </div>

        <div className="flex items-center justify-between mt-6 px-4">
          <button
            onClick={prevImage}
            className="bg-white p-4 rounded-full shadow-md hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            <GrPrevious size={20} />
          </button>

          <p className="text-gray-700 font-semibold text-lg">
            {index + 1} / {images.length}
          </p>

          <button
            onClick={nextImage}
            className="bg-white p-4 rounded-full shadow-md hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            <GrNext size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

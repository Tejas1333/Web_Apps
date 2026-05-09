"use client";
import React from "react";
import Image from "next/image";
import ImageBox from "@/components/ImageBox";
import { useState, useEffect } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { GoCircle, GoDotFill } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";

export default function ImageSlider() {
  const images = [
    "/images/bleach-thousand.png",
    "/images/ken-takakura.png",
    "/images/samurai-silhouette.png",
    "/images/taro-sakamoto.png",
  ];
  const [index, setIndex] = useState(0);
  const [isFull, setIsFull] = useState(false);

  useEffect(() => {
    if (isFull) return;
    const interval = setInterval(() => {
      setIndex((prev) => {
        return (prev + 1) % images.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isFull]);

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

  useEffect(() => {
    function handleKeyboard(e) {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    }

    window.addEventListener("keydown", handleKeyboard);

    return () => window.removeEventListener("keydown", handleKeyboard);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-100 via-purple-100 to-pink-100">
      {isFull ? (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center">
          <Image
            src={images[index]}
            alt="Anime"
            width={1000}
            height={1000}
            className="rounded-2xl object-contain max-h-[90vh] w-auto"
          />

          <RxCross1
            onClick={() => setIsFull(false)}
            className="
            absolute
            top-6
            right-6
            text-white
            text-3xl
            cursor-pointer
            "
          />
        </div>
      ) : (
        <>
          <div className="bg-white/40 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/30">
            <div className="overflow-hidden rounded-2xl ">
              <ImageBox
                className=""
                image={images[index]}
                setIsFull={setIsFull}
              />
            </div>

            <div className="flex items-center justify-between mt-6 px-4">
              <button
                onClick={prevImage}
                On
                className="bg-white p-4 rounded-full shadow-md hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <GrPrevious size={20} />
              </button>

              <div className="flex justify-center gap-2 text-gray-700 text-lg">
                {images.map((_, i) => (
                  <button key={i}>
                    {i === index ? <GoDotFill /> : <GoCircle />}
                  </button>
                ))}
              </div>

              <button
                onClick={nextImage}
                className="bg-white p-4 rounded-full shadow-md hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <GrNext size={20} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

"use client";
import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "@/components/MovieCard";
import { movies } from "@/data/movies";
import { ImSpinner2 } from "react-icons/im";
import { FaArrowUp } from "react-icons/fa";

export default function LoadMore() {
  const [visibleData, setVisibleData] = useState(8);
  const result = movies.slice(0, visibleData);
  const [isLoading, setIsLoading] = useState(false);
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else setShowButton(false);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function loadFunction() {
    if (visibleData >= movies.length) return;
    setIsLoading(true);
    setTimeout(() => {
      setVisibleData((prev) => prev + 4);
      setIsLoading(false);
    }, 1000);
  }

  useEffect(() => {
    function handleInfiniteScroll() {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;

      if (bottom && !isLoading && visibleData < movies.length) loadFunction();
    }

    window.addEventListener("scroll", handleInfiniteScroll);

    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, [isLoading, visibleData]);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="min-h-screen bg-gray-400 p-10">
        <h1 className="text-5xl font-bold text-white mb-10">Load More Data</h1>

        <div className="flex flex-wrap gap-8 justify-center">
          {result.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {isLoading && (
          <div className="flex justify-center mt-10">
            <ImSpinner2 className="animate-spin text-4xl text-white" />
          </div>
        )}

        {showButton && (
          <button
            onClick={scrollToTop}
            className="
        fixed
        bottom-8
        right-8
        z-50

        flex
        items-center
        justify-center

        w-14
        h-14

        rounded-full

        bg-white/80
        backdrop-blur-xl

        border
        border-white/40

        shadow-[0_8px_30px_rgba(0,0,0,0.2)]

        text-slate-800
        text-xl

        transition-all
        duration-300

        hover:scale-110
        hover:bg-black
        hover:text-white
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]

        active:scale-95
      "
          >
            <FaArrowUp />
          </button>
        )}

        {/* Bottom Section */}
        <div className="flex justify-center mt-14">
          {visibleData >= movies.length && (
            <div
              className="
                px-8
                py-4
                rounded-2xl
                bg-white/60
                backdrop-blur-lg
                border
                border-white/40
                shadow-lg
                text-slate-700
                font-semibold
                text-lg
            "
            >
              🎬 No More Movies Left
            </div>
          )}
        </div>
      </div>
    </>
  );
}

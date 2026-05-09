"use client";
import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "@/components/MovieCard";
import { movies } from "@/data/movies";

export default function LoadMore() {
  const [visibleData, setVisibleData] = useState(4);
  const result = movies.slice(0, visibleData);
  return (
    <>
      <div className="min-h-screen bg-gray-400 p-10">
        <h1 className="text-5xl font-bold text-white mb-10">Load More Data</h1>

        <div className="flex flex-wrap gap-8 justify-center">
          {result.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex justify-center mt-14">
          {visibleData >= movies.length ? (
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
          ) : (
            <button
              onClick={() => {
                setVisibleData((prev) => prev + 4);
              }}
              className="
                group
                relative
                overflow-hidden
                px-10
                py-4
                rounded-2xl
                bg-white
                text-slate-800
                font-bold
                text-lg
                shadow-[0_8px_25px_rgba(0,0,0,0.15)]
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)]
                "
                >
              <span className="relative z-10">Load More Movies</span>

              {/* Shine Animation */}
              <div
                className="
                absolute
                top-0
                left-[-120%]
                h-full
                w-full
                bg-linear-to-r
                from-transparent
                via-white/50
                to-transparent
                skew-x-12
                transition-all
                duration-700
                group-hover:left-[120%]
                "
              />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

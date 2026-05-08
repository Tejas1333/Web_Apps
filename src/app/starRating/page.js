"use client";
import React from "react";
import { StarIcon ,StarHalfIcon } from "lucide-react";
import { useState , useEffect } from "react";

export default function StarRating() {
  const [StarRating, setStarRating] = useState(null);
  const [hoverStarRating, setHoverStarRating] = useState(null);
  const [totalRating, setTotalRating] = useState(null);
  const [totalUsers, setTotalUsers] = useState(null);

    useEffect(() => {
      const tr = localStorage.getItem("totalRating")
      const tu = localStorage.getItem("totalUsers")

        setTotalRating(JSON.parse(tr))
        setTotalUsers(JSON.parse(tu))
    }, [])

    useEffect(() => {
        // localStorage.clear()
      localStorage.setItem("totalRating", JSON.stringify(totalRating))
      localStorage.setItem("totalUsers", JSON.stringify(totalUsers))
    }, [totalRating , totalUsers])
    
    

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-6 bg-zinc-900 text-white">
      <div className="flex justify-center items-center gap-3">
        <StarIcon
          className="cursor-pointer transition-all duration-200 hover:scale-110"
          onClick={() => {
            if(StarRating == null){
                setStarRating(1);
                setTotalRating(totalRating + 1);
                setTotalUsers(totalUsers + 1);
            }
          }}
          onMouseEnter={() => {
            setHoverStarRating(1);
          }}
          onMouseLeave={() => {
            setHoverStarRating(null);
          }}
          style={{
            fill:
              StarRating >= 1
                ? "yellow"
                : hoverStarRating >= 1
                  ? "PaleGoldenRod"
                  : "none",
          }}
        />

        <StarIcon
          className="cursor-pointer transition-all duration-200 hover:scale-110"
          onClick={() => {
            if(StarRating == null){
                setStarRating(2);
                setTotalRating(totalRating + 2);
                setTotalUsers(totalUsers + 1);
            }
          }}
          onMouseEnter={() => {
            setHoverStarRating(2);
          }}
          onMouseLeave={() => {
            setHoverStarRating(null);
          }}
          style={{
            fill:
              StarRating >= 2
                ? "yellow"
                : hoverStarRating >= 2
                  ? "PaleGoldenRod"
                  : "none",
          }}
        />

        <StarIcon
          className="cursor-pointer transition-all duration-200 hover:scale-110"
          onClick={() => {
            if(StarRating == null){
                setStarRating(3);
                setTotalRating(totalRating + 3);
                setTotalUsers(totalUsers + 1);
            }
          }}
          onMouseEnter={() => {
            setHoverStarRating(3);
          }}
          onMouseLeave={() => {
            setHoverStarRating(null);
          }}
          style={{
            fill:
              StarRating >= 3
                ? "yellow"
                : hoverStarRating >= 3
                  ? "PaleGoldenRod"
                  : "none",
          }}
        />

        <StarIcon
          className="cursor-pointer transition-all duration-200 hover:scale-110"
          onClick={() => {
            if(StarRating == null){
                setStarRating(4);
                setTotalRating(totalRating + 4);
                setTotalUsers(totalUsers + 1);
            }
          }}
          onMouseEnter={() => {
            setHoverStarRating(4);
          }}
          onMouseLeave={() => {
            setHoverStarRating(null);
          }}
          style={{
            fill:
              StarRating >= 4
                ? "yellow"
                : hoverStarRating >= 4
                  ? "PaleGoldenRod"
                  : "none",
          }}
        />

        <StarIcon
          className="cursor-pointer transition-all duration-200 hover:scale-110"
          onClick={() => {
            if(StarRating == null){
                setStarRating(5);
                setTotalRating(totalRating + 5);
                setTotalUsers(totalUsers + 1);
            }
          }}
          onMouseEnter={() => {
            setHoverStarRating(5);
          }}
          onMouseLeave={() => {
            setHoverStarRating(null);
          }}
          style={{
            fill:
              StarRating >= 5
                ? "yellow"
                : hoverStarRating >= 5
                  ? "PaleGoldenRod"
                  : "none",
          }}
        />
      </div>

      <button
        className="px-4 py-2 rounded-lg bg-yellow-500 text-black font-semibold hover:scale-105 transition-all duration-200"
        onClick={() => {
          setHoverStarRating(null);
          setStarRating(null);
        }}
      >
        Reset
      </button>

      <div className="text-2xl font-bold">
        {totalUsers == 0 ? (
          <p>No users</p>
        ) : (
            <div>
                <p>AVG Rating: {(totalRating / totalUsers).toFixed(1)}</p>
                <p>Total Rating: {totalRating}</p>
                <p>Total Users: {totalUsers}</p>
            </div>
        )}
      </div>
    </div>
  );
}

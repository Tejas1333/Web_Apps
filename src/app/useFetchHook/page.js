"use client";
import React, { useState, useEffect } from "react";
import useFetch from "@/hooks/useFetch";

export default function App() {
    const { data , loading , error} = useFetch("https://v2.jokeapi.dev/joke/any")
    return (
        <div className="w-full h-173.5 flex justify-center items-center bg-amber-300">
            {loading && <div>Loading</div>}
            {error && <div>{error}</div>}
            {data && <div>{data.setup} <br /> {data.delivery}</div>}
            {/* {data && <div></div>} */}

        </div>
    )
}

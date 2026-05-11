"use client"
import React from "react";
import { useEffect } from "react";

const Popup = ({ setPopup }) => {
    useEffect(() => {
      document.body.style.overflow = "hidden"
    
      return () => {
        document.body.style.overflow = "auto"
      }
    }, [])
    

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center px-4" onClick={()=>{setPopup(false)}}>
      <div className="bg-white text-black w-full max-w-md rounded-2xl p-7 shadow-2xl" onClick={(e)=>{e.stopPropagation()}}>
        <h2 className="text-2xl font-bold mb-4">Cookie Preferences</h2>

        <p className="text-gray-600 mb-6 leading-relaxed">
          We use cookies to improve your experience and analyze website traffic.
        </p>

        <div className="flex gap-4">
          <button
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
            onClick={() => {
              setPopup(false);
            }}
          >
            Accept All
          </button>

          <button
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition"
            onClick={() => {
              setPopup(false);
            }}
          >
            Reject All
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Popup;

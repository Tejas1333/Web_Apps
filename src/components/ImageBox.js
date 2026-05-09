import React from "react";
import Image from "next/image";

const ImageBox = ({ image , setIsFull }) => {
  return (
    <div className="relative w-212.5 h-125 ">
      <Image
        key={image}
        src={image}
        alt="Anime"
        fill
        className="object-cover rounded-2xl transition-all duration-300 hover:scale-105"
        onClick={()=>{
            setIsFull(true)
        }}
      />
      
    </div>
  );
};

export default ImageBox;

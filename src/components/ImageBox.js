import React from "react";
import Image from "next/image";

const ImageBox = ({ image }) => {
  return (
    <div className="relative w-212.5 h-125 ">
      <Image
        src={image}
        alt="Anime"
        fill
        className="object-cover rounded-2xl "
      />
    </div>
  );
};

export default ImageBox;

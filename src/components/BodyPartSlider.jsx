import React from "react";
import img from "../assets/logo2.png";

const BodyPartSlider = ({ item, bodyPart, setBodyPart }) => {
  return (
    <button
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
      className={`flex flex-col items-center justify-center border-t-4 transition-all ${
        bodyPart === item ? "border-[#f5a623]" : "border-transparent"
      } hover:border-[#f5a623]/60`}
    >
      <img src={img} alt={item} className="w-[70px] h-[70px]" />
      <p className="mt-2 text-sm capitalize text-gray-300">{item}</p>
    </button>
  );
};

export default BodyPartSlider;

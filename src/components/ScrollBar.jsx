import React from "react";
import BodyPartSlider from "./bodyPartSlider";


const ScrollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div className="flex overflow-x-auto space-x-10 px-5">
      {data?.map((item) => (
        <div key={item} className="flex-shrink-0">
          <BodyPartSlider
            item={item}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
        </div>
      ))}
    </div>
  );
};

export default ScrollBar;

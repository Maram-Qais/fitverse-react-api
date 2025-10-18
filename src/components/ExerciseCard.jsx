import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      to={`/exercise/${exercise.id}`}
      className="group bg-black rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02] relative"
    >
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="bg-orange-500/20 text-orange-400 text-xs px-3 py-1 rounded-full font-semibold capitalize">
            {exercise.bodyPart}
          </span>
          <span className="bg-orange-500/20 text-orange-400 text-xs px-3 py-1 rounded-full font-semibold capitalize">
            {exercise.target}
          </span>
        </div>

        <h3 className="text-white text-lg font-bold capitalize line-clamp-2">
          {exercise.name}
        </h3>

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="text-sm font-semibold text-white px-5 py-2 rounded-lg bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 shadow-md hover:shadow-lg transition-all duration-300">
            View Details
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ExerciseCard;

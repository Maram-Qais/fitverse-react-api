import React from "react";

const Details = ({ exerciseDetail }) => {
  const { name, target, equipment, bodyPart, instructions, gifUrl } = exerciseDetail;

  return (
    <section className="max-w-screen-xl mx-auto mt-10 md:mt-20 px-6 grid md:grid-cols-2 gap-10 items-center">
      {/* Image Section */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-700">
        {gifUrl ? (
          <img
            src={gifUrl}
            alt={name}
            className="w-full h-[350px] md:h-[450px] object-cover transition-all duration-300 hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-[350px] md:h-[450px] bg-gray-800 animate-pulse flex items-center justify-center text-gray-400">
            Loading image...
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="text-gray-200 space-y-5">
        <h2 className="text-3xl md:text-5xl font-extrabold capitalize text-[#f5a623] drop-shadow-[0_0_15px_rgba(245,166,35,0.5)]">
          {name}
        </h2>

        <p className="text-lg text-gray-400 leading-relaxed">
          <span className="text-[#f5a623] font-semibold capitalize">{name}</span>{" "}
          is a {target}-focused exercise using{" "}
          <span className="text-[#f5a623] font-medium">{equipment}</span>. It primarily works your{" "}
          <span className="capitalize">{target}</span> and belongs to the{" "}
          <span className="capitalize">{bodyPart}</span> category.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          {[bodyPart, target, equipment].map((tag, i) => (
            <span
              key={i}
              className="bg-[#f5a623]/10 text-[#f5a623] border border-[#f5a623]/30 rounded-full px-4 py-2 text-sm font-medium capitalize"
            >
              {tag}
            </span>
          ))}
        </div>

        {Array.isArray(instructions) && instructions.length > 0 && (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-3 text-white">Instructions</h3>
            <ul className="space-y-2 list-decimal list-inside text-gray-400 text-base">
              {instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Details;

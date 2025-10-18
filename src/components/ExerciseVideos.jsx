import React from "react";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <div className="mt-10 md:mt-20 p-5 text-center">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-8">
        Watch{" "}
        <span className="text-[#f5a623] capitalize">{name}</span> exercise videos
      </h2>

      {/* Video Cards */}
      <div className="flex flex-wrap justify-center gap-10 max-w-screen-lg mx-auto">
        {exerciseVideos.slice(0, 3).map((item, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-[280px] md:w-[320px] lg:w-[360px] bg-black border border-gray-700 rounded-xl overflow-hidden shadow-md hover:bg-gray-900 transition-all duration-300"
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              className="w-full h-56 object-cover rounded-t-xl"
            />

            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 hover:text-[#f5a623] transition">
                {item.video.title}
              </h3>
              <p className="text-sm text-gray-400">{item.video.channelName}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;

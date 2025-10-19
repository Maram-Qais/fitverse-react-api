import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { exerciseOptions, fetchData } from "../api/data";
import BodyPartSlider from "./BodyPartSlider";

const SearchExercise = ({ bodyPart, setBodyPart, setExercise }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        const cached = localStorage.getItem("bodyParts");
        if (cached) {
          setBodyParts(JSON.parse(cached));
          return;
        }

        const bodyPartData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOptions
        );

        if (!Array.isArray(bodyPartData))
          throw new Error("Invalid API response");

        const parts = ["all", ...bodyPartData];
        setBodyParts(parts);
        localStorage.setItem("bodyParts", JSON.stringify(parts));
      } catch (error) {
        console.warn("Using fallback body parts due to API limit:", error);
        setBodyParts(["all", "chest", "legs", "back", "arms", "shoulders", "abs"]);
      }
    };

    fetchExerciseData();
  }, []);

  const handleSearch = async () => {
    if (!search) return;
    setLoading(true);
    try {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const query = search.toLowerCase();
      const filtered = exerciseData.filter((e) =>
        [e.name, e.target, e.equipment, e.bodyPart].some((f) =>
          f.toLowerCase().includes(query)
        )
      );

      setExercise(filtered);
      window.scrollTo({ top: 1800, behavior: "smooth" });
    } catch (error) {
      console.error("Search failed:", error);
      alert("API limit reached. Try again later or refresh the page.");
    } finally {
      setLoading(false);
      setSearch("");
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 md:py-20 px-4">
      <div className="mx-auto max-w-[1300px]">
        {/* Title */}
        <h3 className="text-center font-extrabold text-[26px] sm:text-[32px] md:text-[40px] lg:text-[50px] tracking-tight mb-8 leading-tight">
          <span className="text-[#f5a623]">Exercises</span>
          <br />
          you should know
        </h3>

        {/* Search Input */}
        <div className="relative mx-auto max-w-[900px]">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search exercise..."
            className="w-full h-[52px] sm:h-[60px] md:h-[70px] px-4 sm:px-6 pr-12 sm:pr-14 rounded-md border-2 border-[#f5a623] bg-transparent text-sm sm:text-base md:text-lg font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f5a623]/50 transition-all"
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className={`absolute right-4 top-1/2 -translate-y-1/2 text-[#f5a623] hover:text-[#ffbe45] transition-all ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Search"
          >
            {loading ? (
              <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#f5a623] border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <FiSearch size={22} className="sm:size-[26px]" />
            )}
          </button>
        </div>

        {/* Body Part Slider */}
        <div className="mt-8 overflow-x-auto">
          <div className="flex gap-6 sm:gap-8 justify-center min-w-max px-2">
            {bodyParts.map((item) => (
              <BodyPartSlider
                key={item}
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchExercise;


import React, { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { exerciseOptions, fetchData } from "../api/data";

const Exercises = ({ bodyPart, exercise, setExercise }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 8;

  // paginate indexes
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercise?.slice(indexOfFirstExercise, indexOfLastExercise) || [];

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = [];

      try {
        if (bodyPart === "all") {
          exerciseData = await fetchData(
            "https://exercisedb.p.rapidapi.com/exercises",
            exerciseOptions
          );
        } else {
          exerciseData = await fetchData(
            `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
            exerciseOptions
          );
        }
        setExercise(exerciseData);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchExerciseData();
  }, [bodyPart, setExercise]);

  return (
    <section id="exercise" className="mt-6 lg:mt-12 px-5 py-5 scroll-mt-24">
      <h3 className="text-2xl lg:text-3xl font-semibold mb-10 text-center text-white">
        Showing Results
      </h3>

      {/* exercise grid */}
      <div
        className="
          grid 
          grid-cols-1
          sm:grid-cols-2 
          md:grid-cols-3 
          xl:grid-cols-4
          gap-8
          place-items-center
          mx-auto
          max-w-[1300px]
        "
      >
        {currentExercises.map((exerciseItem) =>
          exerciseItem?.id ? (
            <ExerciseCard key={exerciseItem.id} exercise={exerciseItem} />
          ) : null
        )}
      </div>

      {/* pagination */}
      {exercise?.length > exercisesPerPage && (
        <Stack
          spacing={2}
          alignItems="center"
          sx={{
            marginTop: "60px",
            "& .MuiPaginationItem-root": {
              color: "#f5a623",
            },
            "& .Mui-selected": {
              backgroundColor: "#f5a623 !important",
              color: "#000 !important",
            },
          }}
        >
          <Pagination
            count={Math.ceil(exercise.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            shape="rounded"
            size="large"
          />
        </Stack>
      )}
    </section>
  );
};

export default Exercises;

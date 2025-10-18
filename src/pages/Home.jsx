import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import Exercise from "../components/Exercise";
import SearchExercise from "../components/SearchExercise";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercise, setExercise] = useState([]);

  return (
    <div>
    <div id="hero">
  <HeroBanner />
</div>
    <div id="search">
  <SearchExercise
    setExercise={setExercise}
    bodyPart={bodyPart}
    setBodyPart={setBodyPart}
  />
</div>
 <div id="exercises">
  <Exercise
    setExercise={setExercise}
    bodyPart={bodyPart}
    setBodyPart={setBodyPart}
    exercise={exercise}
  />
</div> 

</div>
  );
};

export default Home;

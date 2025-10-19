import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import Exercise from "../components/Exercise";
import SearchExercise from "../components/SearchExercise";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercise, setExercise] = useState([]);
  const hero = useRef(null);
const search = useRef(null);
const exercises = useRef(null);

useGSAP(()=>{const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
tl.from(hero.current, { opacity: 0, y: -50 })
  .from(search.current, { opacity: 0, y: 50 }, "-=0.3")
  .from(exercises.current, { opacity: 0, y: 80 }, "-=0.2");
},[])
  return (
    <div>
<div id="hero">
  <HeroBanner />
</div>
  <div id="search" ref={search}>
  <SearchExercise
    setExercise={setExercise}
    bodyPart={bodyPart}
    setBodyPart={setBodyPart}
  />
</div>
<div id="exercises" ref={exercises}>
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

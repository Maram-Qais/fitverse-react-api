
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData, exerciseOptions, youtubeOptions } from "../api/data";
import Detail from "../components/Details";
import ExerciseVideos from "../components/ExerciseVideos";

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const data = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(data);

      const youtubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com/search?query=${data.name}`;
      const videoData = await fetchData(youtubeSearchUrl, youtubeOptions);
      setExerciseVideos(videoData.contents || []);
    };

    fetchExerciseData();
  }, [id]);

  return (
    <div className="pt-10 text-white bg-black min-h-screen">
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
    </div>
  );
};

export default ExerciseDetails;

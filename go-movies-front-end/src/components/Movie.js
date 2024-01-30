import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Movie = () => {
  const [movie, setMovie] = useState({});
  let { id } = useParams();

  useEffect(() => {
    let myMovie = {
        id: 1,
        title: "Notebook",
        release_date: "2000-03-04",
        runtime: 120,
        mpaa_rating: "R",
        description: "drama",
    }
    setMovie(myMovie);

  }, [id])

  return(
    <>
    <div>
      <h2>Movie: {movie.title} </h2>
      <small><em>{movie.release_date}, {movie.runtime} minutes, Rated {movie.mpaa_rating}</em></small>
      <hr />
      <p>{movie.description}</p>
    </div>
    </>
  )
}

export default Movie;
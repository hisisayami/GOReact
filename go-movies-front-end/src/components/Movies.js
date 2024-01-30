import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  //define a state
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: headers,
    }
    
//use fetch func to go to backend, req json, get it and then set movies
    fetch(`http://localhost:8088/movies`, requestOptions)
        .then((response) => response.json())
        .then((data)=> {
            setMovies(data);
        })
        .catch(err => {
           console.log(err);
        })
    }, []);

  return (
    <>
      <div>
        <h2>Movies! </h2>
        <hr />
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Movies</th>
              <th>Release Date</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((m) => (
              <tr key={m.id}>
                <td>
                  <Link to={`/movies/${m.id}`}>{m.title}</Link>
                </td>
                <td>{m.release_date}</td>
                <td>{m.mpaa_rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Movies;

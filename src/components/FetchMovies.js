import React, { useState } from 'react';


function FetchMovies() {
  const [newMovie, setNewMovie] = useState({
    title: '',
    director: '',
    year: '',
  });

  const handleInputChange = (e) => {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddMovie = () => {
    console.log(newMovie);
  };

  return (
    <div>
      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={newMovie.title}
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor="director">Director</label>
        <input
          type="text"
          id="director"
          name="director"
          value={newMovie.director}
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor="year">Year</label>
        <input
          type="text"
          id="year"
          name="year"
          value={newMovie.year}
          onChange={handleInputChange}
        />
        <br />

        <button type="button" onClick={handleAddMovie}>
          Add Movie
        </button>
      </form>

      {/* Fetch Movies button and other components */}
    </div>
  );
}

export default FetchMovies;
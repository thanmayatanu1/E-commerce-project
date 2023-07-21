import React, { useState } from 'react';

function FetchMovies() {
  const [newMovie, setNewMovie] = useState({ title: '', director: '', year: '' });
  const [movies, setMovies] = useState([]);

  const handleInputChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleAddMovie = () => {
    fetch('https://api.example.com/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    })
      .then((response) => response.json())
      .then((data) => {
        setMovies([...movies, data]);
        setNewMovie({ title: '', director: '', year: '' });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleDeleteMovie = (id) => {
    fetch(`https://api.example.com/movies/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setMovies(movies.filter((movie) => movie.id !== id));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <label>
        Title:
        <input type="text" name="title" value={newMovie.title} onChange={handleInputChange} />
      </label>
      <label>
        Director:
        <input type="text" name="director" value={newMovie.director} onChange={handleInputChange} />
      </label>
      <label>
        Year:
        <input type="text" name="year" value={newMovie.year} onChange={handleInputChange} />
      </label>
      <button onClick={handleAddMovie}>Add Movie</button>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} - {movie.director} ({movie.year})
            <button onClick={() => handleDeleteMovie(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchMovies;
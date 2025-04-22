import React from 'react';
import FilmDetaylari from './FilmDetaylari.jsx';
import { movies } from '../sahteVeri.js';

export default function FilmListesi() {
  
  return (
    <div className="movie-list">
      {
      movies &&
      movies.map((movie) => (
        <FilmDetaylari key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

import React from 'react';
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function FilmDetaylari({ movie, liked, toggleLike, yorum, yorumGuncelle, saveFn }) {
  return (
    <div className="movie-card">
      <Link to={`/filmler/${movie.id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <h2>{movie.title}</h2>
      </Link>

      <div className="movie-director">
        Director: <em>{movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{movie.metascore}</strong>
      </div>

      <h3>Actors</h3>
      {movie.stars && movie.stars.map((star) => (
        <div key={star} className="movie-star">{star}</div>
      ))}

      <button onClick={toggleLike} style={{ marginTop: '10px' }}>
        {liked ? "❤️ Unlike" : "🤍 Like"}
      </button>

      {saveFn && (
        <button
          onClick={(e) => {
            e.preventDefault();
            saveFn();
          }}
          style={{ marginLeft: '10px' }}
        >
          📌 Kaydet
        </button>
      )}

      {/* Tek yorum alanı */}
      <textarea
        value={yorum}
        onChange={(e) => yorumGuncelle(e.target.value)}
        placeholder="Yorum yaz..."
        rows={3}
        style={{ width: '100%', padding: '6px', marginTop: '10px', resize: 'none' }}
      />
    </div>
  );
}

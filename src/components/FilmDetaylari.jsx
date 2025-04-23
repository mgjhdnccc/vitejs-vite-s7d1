import React, { useState } from 'react';
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function FilmDetaylari({ movie, liked, toggleLike, yorumlar, yorumEkle, saveFn }) {
  const [yeniYorum, setYeniYorum] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (yeniYorum.trim() === "") return;
    yorumEkle(yeniYorum);
    setYeniYorum("");
  };

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
      {movie.stars &&
        movie.stars.map((star) => (
          <div key={star} className="movie-star">
            {star}
          </div>
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

      {/* Yorum Ekleme */}
      <form onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
        <textarea
          value={yeniYorum}
          onChange={(e) => setYeniYorum(e.target.value)}
          placeholder="Yorum yaz..."
          rows={3}
          style={{ width: '100%', padding: '6px', resize: 'none' }}
        />
        <button type="submit" style={{ marginTop: '5px' }}>Gönder</button>
      </form>

      {/* Yorumları Listele */}
      {yorumlar.length > 0 && (
        <div style={{ marginTop: '10px' }}>
          <strong>Yorumlar:</strong>
          <ul>
            {yorumlar.map((yorum, i) => (
              <li key={i}>{yorum}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

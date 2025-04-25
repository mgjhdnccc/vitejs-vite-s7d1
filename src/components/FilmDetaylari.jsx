import React, { useState } from 'react';
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function FilmDetaylari({
  movie,
  liked,
  toggleLike,
  yorum,
  yorumGuncelle,
  saveFn
}) {
  const [editMode, setEditMode] = useState(false);
  const [duzenlenenYorum, setDuzenlenenYorum] = useState(yorum || "");

  const handleEditSave = () => {
    yorumGuncelle(duzenlenenYorum);
    setEditMode(false);
  };

  const handleDelete = () => {
    yorumGuncelle("");
    setDuzenlenenYorum("");
    setEditMode(false);
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

      {/* Yorum alanı */}
      <div style={{ marginTop: '15px' }}>
        <strong>Yorum:</strong>
        {!editMode ? (
          <>
            <p style={{ whiteSpace: 'pre-wrap' }}>{yorum || <em>Henüz yorum yazılmadı.</em>}</p>
            <button onClick={() => {
              setDuzenlenenYorum(yorum || "");
              setEditMode(true);
            }}>
              {yorum ? "🖊️ Düzenle" : "📃 Yorumun"}
            </button>
            {yorum && (
              <button onClick={handleDelete} style={{ marginLeft: '10px' }}>
                🗑️ Sil
              </button>
            )}
          </>
        ) : (
          <>
            <textarea
              value={duzenlenenYorum}
              onChange={(e) => setDuzenlenenYorum(e.target.value)}
              rows={3}
              style={{ width: '100%', padding: '6px', resize: 'none' }}
            />
            <div style={{ marginTop: '5px' }}>
              <button onClick={handleEditSave}>💾 Kaydet</button>
              <button onClick={() => setEditMode(false)} style={{ marginLeft: '10px' }}>
                ❌ Vazgeç
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

import { Link } from "react-router-dom/cjs/react-router-dom";

export default function FilmDetaylari({ movie, liked, toggleLike, yorum, yorumGuncelle, saveFn }) {
  const { id, title, director, metascore, stars } = movie;

  return (
    <div className="movie-card">
      {/* Sadece başlığa Link */}
      <Link to={`/filmler/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <h2>{title}</h2>
      </Link>

      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>
      {stars &&
        stars.map((star) => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}

      {/* Like / Unlike */}
      <button onClick={toggleLike} style={{ marginTop: '10px' }}>
        {liked ? "❤️ Unlike" : "🤍 Like"}
      </button>

      {/* Kaydet Butonu (saveFn varsa) */}
      {saveFn && (
        <button
          onClick={(e) => {
            e.preventDefault();
            saveFn();
          }}
          style={{ marginTop: '10px', marginLeft: '10px' }}
        >
          📌 Kaydet
        </button>
      )}

      {/* Yorum Alanı */}
      <textarea
        placeholder="Yorum yaz..."
        value={yorum}
        onChange={(e) => yorumGuncelle(e.target.value)}
        rows={3}
        style={{
          width: '100%',
          padding: '6px',
          marginTop: '10px',
          resize: 'none',
          borderRadius: '5px'
        }}
      />
    </div>
  );
}

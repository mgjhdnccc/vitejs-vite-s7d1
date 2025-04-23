import { Link } from "react-router-dom/cjs/react-router-dom";

export default function FilmDetaylari({ movie, liked, toggleLike, yorum, yorumGuncelle }) {
  const { id, title, director, metascore, stars } = movie;

  return (
    <Link to={`/filmler/${id}`}>
      <div className="movie-card">
       <h2>{title}</h2>
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
        <button onClick={(e) => {
          e.preventDefault();
          toggleLike();
        }} style={{ marginTop: '10px' }}>
          {liked ? "❤️ Unlike" : "🤍 Like"}
        </button>

        {/* Yorum Alanı */}
        <textarea
          placeholder="Yorum yaz..."
          value={yorum}
          onClick={(e) => e.stopPropagation()}
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
    </Link>
  );
}

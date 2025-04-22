import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

export default function KaydedilenlerListesi(props) {
  const {
    filmListesi,
    kaydedilenler,
    aramaTerimi,
    setAramaTerimi,
    addFn,
    removeFn,
  } = props;

  const handleSearch = (e) => {
    setAramaTerimi(e.target.value.toLowerCase());
  };

  const filtrelenmisFilmler = filmListesi.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(aramaTerimi) ||
      movie.director.toLowerCase().includes(aramaTerimi) ||
      String(movie.metascore).includes(aramaTerimi) ||
      movie.stars.some(star => star.toLowerCase().includes(aramaTerimi))
    );
  });

  const isKaydedilmis = (id) => {
    return kaydedilenler.find((film) => film.id === id);
  };

  return (
    <div className="saved-list">
      <h3>Tüm Filmler Arasında Ara:</h3>
      <input
        type="text"
        placeholder="Film, yönetmen, metascore, oyuncu ara..."
        value={aramaTerimi}
        onChange={handleSearch}
        style={{
          padding: '5px 10px',
          marginBottom: '10px',
          width: '100%',
          maxWidth: '300px'
        }}
      />

      {filtrelenmisFilmler.map((movie) => (
        <div key={movie.id} className="saved-movie" style={{ marginBottom: "10px" }}>
          {movie.title}
          {isKaydedilmis(movie.id) ? (
            <button onClick={() => removeFn(movie.id)} style={{ marginLeft: '8px' }}>
              ❌
            </button>
          ) : (
            <button onClick={() => addFn(movie)} style={{ marginLeft: '8px' }}>
              + Kaydet
            </button>
          )}
        </div>
      ))}

      <Link to='/'><div className="home-button">Anasayfa</div></Link>
    </div>
  );
}
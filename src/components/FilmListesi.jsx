import React from 'react';
import FilmDetaylari from './FilmDetaylari';

export default function FilmListesi({
  films,
  aramaTerimi,
  setAramaTerimi,
  likes,
  setLikes,
  comments,
  setComments
}) {
  const handleSearch = (e) => {
    setAramaTerimi(e.target.value.toLowerCase());
  };

  const filtrelenmisFilmler = films.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(aramaTerimi) ||
      movie.director.toLowerCase().includes(aramaTerimi) ||
      String(movie.metascore).includes(aramaTerimi) ||
      movie.stars.some(star => star.toLowerCase().includes(aramaTerimi))
    );
  });

  const toggleLike = (id) => {
    setLikes({
      ...likes,
      [id]: !likes[id]
    });
  };

  const yorumGuncelle = (id, text) => {
    setComments({
      ...comments,
      [id]: text
    });
  };

  return (
    <div className="film-listesi">
      <input
        type="text"
        placeholder="Film, yönetmen, metascore, oyuncu ara..."
        value={aramaTerimi}
        onChange={handleSearch}
        style={{
          padding: '8px',
          margin: '20px auto',
          display: 'block',
          width: '90%',
          maxWidth: '400px',
          fontSize: '1rem'
        }}
      />

      {filtrelenmisFilmler.map((film) => (
        <FilmDetaylari
          key={film.id}
          movie={film}
          liked={likes[film.id]}
          toggleLike={() => toggleLike(film.id)}
          yorum={comments[film.id] || ""}
          yorumGuncelle={(text) => yorumGuncelle(film.id, text)}
        />
      ))}
    </div>
  );
}

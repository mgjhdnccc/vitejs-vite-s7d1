import React from 'react';
import FilmDetaylari from './FilmDetaylari';

export default function FilmListesi({
  films,
  aramaTerimi,
  
  likes,
  setLikes,
  comments,
  setComments,
  saveFn
}) 
{
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
      
      {filtrelenmisFilmler.map((film) => (
        <FilmDetaylari
          key={film.id}
          movie={film}
          liked={likes[film.id]}
          toggleLike={() => toggleLike(film.id)}
          yorum={comments[film.id] || ""}
          yorumGuncelle={(text) => yorumGuncelle(film.id, text)}
          saveFn={() => saveFn(film)}
        />
      ))}
    </div>
  );
}

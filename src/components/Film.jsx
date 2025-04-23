import React, { useState, useEffect } from 'react';
import { movies } from '../sahteVeri';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import FilmDetaylari from './FilmDetaylari';

export default function Film({ saveFn, likes, setLikes, comments, yorumEkle }) {
  const [movie, setMovie] = useState();
  
  const { id } = useParams();

  useEffect(() => {
    const theMovie = movies.find((m) => m.id === Number(id));
    setMovie(theMovie);
  }, [id]);

  if (!movie) return <div>Film bilgisi yükleniyor...</div>;

  const toggleLike = () => {
    setLikes({
      ...likes,
      [movie.id]: !likes[movie.id]
    });
  };

  
  return (
    <div>
      <FilmDetaylari
        movie={movie}
        liked={likes[movie.id]}
        toggleLike={toggleLike}
        yorumlar={comments[movie.id] || []}
        yorumEkle={(text) => yorumEkle(movie.id, text)}
        saveFn={() => saveFn(movie)}
      />
    </div>
  );
}
//deneme 123

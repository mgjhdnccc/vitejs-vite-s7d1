import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

export default function KaydedilenlerListesi(props) {
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map((movie, index) => (
        <span key={index} className="saved-movie">
          {movie.title}
          <button 
            onClick={() => props.removeFn(movie.id)} 
            style={{ marginLeft: '8px', cursor: 'pointer' }}
          >
            ❌
          </button>
        </span>
      ))}
      <Link to='/'><div className="home-button">Anasayfa</div></Link>
    </div>
  );
}

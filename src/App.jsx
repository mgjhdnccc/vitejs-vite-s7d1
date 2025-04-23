import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import KaydedilenlerListesi from './components/KaydedilenlerListesi';
import FilmListesi from './components/FilmListesi';
import Film from './components/Film';

import { movies } from './sahteVeri';

export default function App() {
  const [filmListesi, setFilmListesi] = useState(movies);
  const [kaydedilenler, setKaydedilenler] = useState([]);
  const [aramaTerimi, setAramaTerimi] = useState("");

  const [likes, setLikes] = useState(() => {
    const stored = localStorage.getItem("likes");
    return stored ? JSON.parse(stored) : {};
  });

  const [comments, setComments] = useState(() => {
    const stored = localStorage.getItem("comments");
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const KaydedilenlerListesineEkle = (film) => {
    if (!kaydedilenler.find(item => item.id === film.id)) {
      setKaydedilenler([...kaydedilenler, film]);
    }
  };

  const KaydedilenlerdenSil = (filmId) => {
    setKaydedilenler(kaydedilenler.filter(film => film.id !== filmId));
  };

  return (
    <div>
      <KaydedilenlerListesi
        list={kaydedilenler}
        addFn={KaydedilenlerListesineEkle}
        removeFn={KaydedilenlerdenSil}
      />

      <Switch>
        <Route exact path="/">
          <FilmListesi
            films={filmListesi}
            aramaTerimi={aramaTerimi}
            setAramaTerimi={setAramaTerimi}
            likes={likes}
            setLikes={setLikes}
            comments={comments}
            setComments={setComments}
            saveFn={KaydedilenlerListesineEkle} 
          />
        </Route>
        <Route path="/filmler/:id">
          <Film
            saveFn={KaydedilenlerListesineEkle}
            likes={likes}
            setLikes={setLikes}
            comments={comments}
            setComments={setComments}
          />
        </Route>
      </Switch>
    </div>
  );
}


// https://v5.reactrouter.com/web/example/url-params
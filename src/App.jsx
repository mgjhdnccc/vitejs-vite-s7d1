import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import FilmListesi from './components/FilmListesi';
import Film from './components/Film';
import Layout from './components/Layout';
import { movies } from './sahteVeri';

export default function App() {
  const [filmListesi, setFilmListesi] = useState(movies);
  const [aramaTerimi, setAramaTerimi] = useState("");

  const [kaydedilenler, setKaydedilenler] = useState(() => {
    const stored = localStorage.getItem("kaydedilenler");
    return stored ? JSON.parse(stored) : [];
  });

  const [likes, setLikes] = useState(() => {
    const stored = localStorage.getItem("likes");
    return stored ? JSON.parse(stored) : {};
  });

  const [comments, setComments] = useState(() => {
    const stored = localStorage.getItem("comments");
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    localStorage.setItem("kaydedilenler", JSON.stringify(kaydedilenler));
  }, [kaydedilenler]);

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
    <Switch>
      <Route path="/filmler/:id">
        <Layout
          kaydedilenler={kaydedilenler}
          addFn={KaydedilenlerListesineEkle}
          removeFn={KaydedilenlerdenSil}
          aramaTerimi={aramaTerimi}
          setAramaTerimi={setAramaTerimi}
        >
          <Film
            saveFn={KaydedilenlerListesineEkle}
            likes={likes}
            setLikes={setLikes}
            comments={comments}
            setComments={setComments}
          />
        </Layout>
      </Route>

      <Route exact path="/">
        <Layout
          kaydedilenler={kaydedilenler}
          addFn={KaydedilenlerListesineEkle}
          removeFn={KaydedilenlerdenSil}
          aramaTerimi={aramaTerimi}
          setAramaTerimi={setAramaTerimi}
        >
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
        </Layout>
      </Route>
    </Switch>
  );
}


// https://v5.reactrouter.com/web/example/url-params
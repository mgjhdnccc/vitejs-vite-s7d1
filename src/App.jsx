import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import KaydedilenlerListesi from './components/KaydedilenlerListesi';
import FilmListesi from './components/FilmListesi';
import Film from './components/Film';

import { movies } from './sahteVeri';

export default function App() {
  const [filmListesi, setFilmListesi] = useState(movies);
  const [kaydedilenler, setKaydedilenler] = useState([]);
  const [aramaTerimi, setAramaTerimi] = useState("");

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
          />
        </Route>
        <Route path="/filmler/:id">
          <Film saveFn={KaydedilenlerListesineEkle} />
        </Route>
      </Switch>
    </div>
  );
}

// https://v5.reactrouter.com/web/example/url-params
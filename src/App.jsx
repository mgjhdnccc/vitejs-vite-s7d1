import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import KaydedilenlerListesi from './components/KaydedilenlerListesi';
import FilmListesi from './components/FilmListesi';
import Film from './components/Film';

import { movies } from './sahteVeri';

export default function App() {
  // Görev 1: State tanımlamaları
  const [filmListesi, setFilmListesi] = useState(movies);
  const [kaydedilenler, setKaydedilenler] = useState([]);

  // Görev 2: Kaydetme fonksiyonu
  const KaydedilenlerListesineEkle = (film) => {
    if (!kaydedilenler.find(item => item.id === film.id)) {
      setKaydedilenler([...kaydedilenler, film]);
    }
  };

  return (
    <div>
      {/* Kaydedilen filmler listesi */}
      <KaydedilenlerListesi list={kaydedilenler} />

      {/* Görev 3: Routing işlemleri */}
      <Switch>
        <Route exact path="/">
          <FilmListesi films={filmListesi} />
        </Route>
        <Route path="/filmler/:id">
          <Film saveFn={KaydedilenlerListesineEkle} />
        </Route>
      </Switch>
    </div>
  );
}

// https://v5.reactrouter.com/web/example/url-params
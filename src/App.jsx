import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { useState } from 'react';
import KaydedilenlerListesi from './components/KaydedilenlerListesi';
import FilmListesi from './components/FilmListesi';
import Film from './components/Film';

import {movies} from './sahteVeri';

export default function App() {
  /* Görev: 1
  kaydedilmiş filmler ve film listesi için 2 tane state tanımlayın.
  film listesini sahteVeri'den alın.
  */
 
  //const [filmListesi, setFilmListesi] = useState([]);
  const [kaydedilenler, setKaydedilenler] = useState([]);


  const KaydedilenlerListesineEkle = (film) => {
    /* Görev: 2
    kaydedilmiş film listesine eklemek için bir click handle fonksiyonu yazın.
    aynı filmi 2. kez eklememeli.
    Kaydet butonunun olduğu component'e prop olarak gönderin.
    */
   if (!kaydedilenler.find(item => item.id === film.id)){
    setKaydedilenler([...kaydedilenler, film]);
   }
  };

  return (
    <div>
      <KaydedilenlerListesi list={[]} />
      {
        /* 
      Görev 3: 2 adet route tanımlayın.
      1. route '/' olacak ve FilmListesi component'ini yükleyecek ve buraya film listesini prop olarak yollayacak.
      2. route '/filmler/' parametresinden sonra 'id' parametresini alacak  (örnek: '/filmler/2', '/filmler/3' id dinamik olacak). Bu route 'Film' bileşenini yükleyecek.
      */
        <Switch> 
          <Route path="/" >
            <FilmListesi />
          </Route>
          <Route path="/filmler/:id"  >
            <Film saveFn={KaydedilenlerListesineEkle}/>
          </Route>
        </Switch>
      }
    </div>
  );
}
// https://v5.reactrouter.com/web/example/url-params
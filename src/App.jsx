// ilgili yerler eklendi
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
        aramaTerimi={aramaTerimi}
        setAramaTerimi={setAramaTerimi}
        filmListesi={filmListesi}
        kaydedilenler={kaydedilenler}
        addFn={KaydedilenlerListesineEkle}
        removeFn={KaydedilenlerdenSil}
      />

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
import React from "react";
import KaydedilenlerListesi from "./KaydedilenlerListesi";
import "./Layout.css";

export default function Layout({
  children,
  kaydedilenler,
  addFn,
  removeFn,
  aramaTerimi,
  setAramaTerimi,
}) {
  return (
    <>
      <header className="header">
        <input
          type="text"
          placeholder="Film, yönetmen, metascore, oyuncu ara..."
          value={aramaTerimi}
          onChange={(e) => setAramaTerimi(e.target.value.toLowerCase())}
        />
        <nav className="nav-links">
          <span>Hakkımızda</span>
          <span>İletişim</span>
          <span>SSS</span>
        </nav>
      </header>

      <div className="app-wrapper">
        <div className="main-content">{children}</div>
        <div className="sidebar">
          <KaydedilenlerListesi
            list={kaydedilenler}
            addFn={addFn}
            removeFn={removeFn}
          />
        </div>
      </div>
    </>
  );
}
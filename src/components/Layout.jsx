import React from "react";
import { Link } from "react-router-dom";
import KaydedilenlerListesi from "./KaydedilenlerListesi";
import Input from "./Input"; // Yeni şık ve sade arama kutusu bileşeni
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
      {/* Üst navigasyon ve arama kutusu */}
      <header className="header">
        <Input
          value={aramaTerimi}
          onChange={(e) => setAramaTerimi(e.target.value.toLowerCase())}
        />

        <nav className="nav-links">
          <Link to="/">Anasayfa</Link>
          <span>Hakkımızda</span>
          <span>İletişim</span>
          <span>SSS</span>
        </nav>
      </header>

      {/* 2 sütunlu yapı: sol film alanı, sağ sidebar */}
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
import React from 'react';
export default function KaydedilenlerListesi({ list, addFn, removeFn }) {
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler</h3>
      {list.length === 0 ? (
        <p>Henüz film kaydedilmedi.</p>
      ) : (
        list.map((film) => (
          <div key={film.id} className="saved-movie" style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#fff",
            padding: "6px 10px",
            border: "1px solid #ddd",
            borderRadius: "6px"
          }}>
            <span>{film.title}</span>
            <button onClick={() => removeFn(film.id)} style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#ff4444",
              cursor: "pointer",
              fontWeight: "bold"
            }}>
              ❌
            </button>
          </div>
        ))
      )}
    </div>
  );
}
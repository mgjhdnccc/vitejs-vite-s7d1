import React from 'react';

export default function KaydedilenlerListesi({ list, addFn, removeFn }) {
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {list.length === 0 ? (
          <p>Henüz film kaydedilmedi.</p>
        ) : (
          list.map((film) => (
            <div
              key={film.id}
              className="saved-movie"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#fff",
                padding: "8px 12px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                fontSize: "0.95rem",
              }}
            >
              <span>{film.title}</span>
              <button
                onClick={() => removeFn(film.id)}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#cc0000",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                ❌
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
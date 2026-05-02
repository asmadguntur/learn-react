import React from "react";
import "./styles.css";

function App() {
  // 1. Buat elemen h2 (Title)
  // Hint: React.createElement('h2', ...)
  const title = React.createElement("h2", null, "Fitur Unggulan");

  // 2. Buat item-item list (li) secara terpisah
  // Hint: Buat variabel untuk setiap item: item1, item2, item3
  const item1 = React.createElement("li", null, "Belajar Cepat");
  // Lanjutkan untuk item2 dan item3...
  const item2 = React.createElement("li", null, "Tutor Santai");
  const item3 = React.createElement("li", null, "Langsung Praktek");

  // 3. Buat container list (ul) dengan className 'feature-list'
  // Hint: Masukkan item1, item2, item3 sebagai argumen berurutan (rest operator)
  const list = React.createElement(
    "ul",
    { className: "feature-list" },
    item1,
    item2,
    item3,
  );

  // 4. Bungkus title dan list ke dalam div dengan className 'card'
  const card = React.createElement("div", { className: "card" }, title, list);

  return card;
}

export default App;

import React from "react";
import "./styles.css";

function Newsletter() {
  // 1. Buat elemen h2 dengan className 'card-title'
  // Hint: React.createElement('h2', { className: '...' }, 'Text')
  const title = React.createElement(
    "h2",
    { className: "card-title" },
    "Join Newsletter",
  );

  // 2. Buat elemen input
  // Jangan lupa atribut type, placeholder, dan className form-input
  const input = React.createElement(
    "input",
    {
      type: "email",
      placeholder: "Masukkan email kamu...",
      className: "form-input",
    },
    null,
  );

  // 3. Buat elemen button
  const button = React.createElement(
    "button",
    { type: "button", className: "btn-primary" },
    "Subscribe",
  ); // TODO: Tambahkan atribut dan className btn-primary

  // 4. Bungkus semuanya dalam div dengan className 'card'
  // Hint: Masukkan title, input, dan button sebagai children
  const card = React.createElement(
    "div",
    { className: "card" },
    title,
    input,
    button,
  );

  return card;
}

export default Newsletter;

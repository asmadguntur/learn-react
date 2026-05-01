import React from "react";

// DILARANG MENGGUNAKAN JSX PADA TUGAS INI!
// Gunakan React.createElement untuk membuat struktur elemen.

function App() {
  // Hint: Argumen ketiga dari React.createElement bisa menerima
  // elemen React lainnya. Kamu bisa memasukkan lebih dari satu anak
  // sebagai argumen ke-3, ke-4, dan seterusnya.
  // Contoh: React.createElement('div', props, child1, child2)

  // Ganti elemen placeholder ini dengan struktur yang diminta
  const welcomeMessage = React.createElement(
    //'h1',
    // null,
    // 'Mulai Mengerjakan Tugas!'
    "div",
    { className: "container" }, // Tambahkan className untuk styling
    React.createElement("h1", null, "Selamat Datang di Bisareact!"),
    React.createElement("p", null, "Platform belajar React paling seru."),
  );

  return welcomeMessage;
}

export default App;

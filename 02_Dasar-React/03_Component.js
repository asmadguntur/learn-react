import React from 'react';

// ✅ Komponen sudah dinamis dan membaca props dengan benar!
function Notification(props) {
  return (
    <div className={`alert alert-${props.type}`}>
      {props.children}
    </div>
  );
}

export default function App() {
  return (
    <div className="container">
      <h1>Notification Center</h1>
      <p>Cek apakah notifikasi di bawah ini muncul dengan benar:</p>
      
      <div className="stack">
        {/* Ekspektasi: Warna Hijau, Teks: Data berhasil disimpan! */}
        <Notification type="success">Data berhasil disimpan!</Notification>
        
        {/* Ekspektasi: Warna Merah, Teks: Terjadi kesalahan! */}
        <Notification type="error">Terjadi kesalahan!</Notification>
        
        {/* Ekspektasi: Warna Kuning, Teks: Mohon perhatian! */}
        <Notification type="warning">Mohon perhatian!</Notification>
      </div>
    </div>
  );
}
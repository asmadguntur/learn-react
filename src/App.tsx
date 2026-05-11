import React from "react";
// TODO: Import PropTypes di sini

interface MenuItemProps {
  name: string;
  price: number;
  isSoldOut?: boolean;
}

export const MenuItem = ({ name, price, isSoldOut }: MenuItemProps) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "12px",
        borderRadius: "8px",
        marginBottom: "8px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h3 style={{ margin: "0 0 4px 0" }}>{name}</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ color: "#555" }}>Rp {price.toLocaleString()}</span>
        {isSoldOut && (
          <span
            style={{
              backgroundColor: "#ffebee",
              color: "#c62828",
              padding: "2px 8px",
              borderRadius: "12px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            Habis
          </span>
        )}
      </div>
    </div>
  );
};

// TODO: Tambahkan validasi PropTypes di bawah ini
// MenuItem.propTypes = {
//   properti: validasi
// };
export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>☕ Menu Cafe Pimon</h2>

      {/* Contoh penggunaan komponen yang benar */}
      <MenuItem name="Kopi Susu Gula Aren" price={18000} />
      <MenuItem name="Croissant" price={25000} isSoldOut={true} />

      {/* 
        Nanti kalau PropTypes sudah dipasang, 
        baris di bawah ini akan memunculkan warning di console browser
        karena tipe datanya salah (uncomment untuk mengetes manual)
      */}
      {/* <MenuItem name={123} price="murah" /> */}
    </div>
  );
}

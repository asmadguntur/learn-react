import React from "react";

function EveryExample() {
  // Data pendaftar
  const participants = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 19 },
    { name: "Charlie", age: 25 },
    { name: "Diana", age: 17 }, // Coba perhatiin age ini...
  ];

  // TODO: Gunakan array method every
  // untuk cek apakah semua participant usianya >= 18
  const allAdults = participants.every((allAdults) => allAdults.age >= 18);

  // TODO: Cetak allAdults ke console
  console.log("All adults?", allAdults);

  return (
    <div className="every-container">
      <h2>Age Checker Result</h2>
      {/* 
        TODO: Tampilkan pesan:
        - "All participants are adults" kalau allAdults = true
        - "Some participants are under 18" kalau false
        {allAdults ? (
        <p>All participants are adults</p>
      ) : (
        <p>Some participants are under 18</p>
      )}
      */}
      {allAdults ? (
        <p>All participants are adults</p>
      ) : (
        <p>Some participants are under 18</p>
      )}
    </div>
  );
}

export default EveryExample;

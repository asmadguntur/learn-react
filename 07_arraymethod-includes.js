import React from "react";

function IncludesFishExample() {
  // Daftar ikan di toko
  const fishCatalog = ["tuna", "salmon", "mackerel"];

  // TODO: Gunakan array method includes untuk cek apakah ada "salmon"
  const hasSalmon = fishCatalog.includes("salmon");

  // TODO: Cetak hasSalmon ke console
  console.log("Has salmon?", hasSalmon);

  return (
    <div className="includes-fish-container">
      <h2>Informasi stok Ikan</h2>
      {/* 
        TODO: Tampilkan pesan:
          - "We have salmon in stock" kalau hasSalmon = true
          - "No salmon found" kalau false
      */}
      {hasSalmon ? <p>We have salmon in stock</p> : <p>No salmon found</p>}
    </div>
  );
}

export default IncludesFishExample;

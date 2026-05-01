import React from "react";

function OptionalExample() {
  // Data user (address bisa aja null)
  const user = {
    name: "BetaTester",
    address: null,
    // Coba ubah "null" jadi object, misalnya:
    //address: { street: 'Ruby Road', country: 'Wonderland' }
  };

  // TODO: Gunakan optional chaining untuk ambil user.address.country
  const userCountry = user?.address?.country;

  // TODO: Cetak userCountry ke console
  console.log("User country:", userCountry);

  return (
    <div className="optional-container">
      <h2>User Country</h2>
      {/* 
        TODO: Tampilkan userCountry di layar.
        Kalau userCountry undefined, tampilkan "No country"
      */}
      <p>{userCountry ?? "No country"}</p>
    </div>
  );
}

export default OptionalExample;

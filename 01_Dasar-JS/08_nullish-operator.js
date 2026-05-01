import React from "react";

function NullishExample() {
  // Data user
  const userData = {
    username: "rocketdev",
    displayName: null, // Coba isi juga undefined atau string
  };

  // TODO: Gunakan nullish operator ?? untuk fallback
  // displayName kalau null/undefined => fallback ke username
  const { displayName, username } = userData; //desctructuring

  /* ?? || ini adalah nullish operator*/
  const finalName = displayName ?? username;

  // TODO: Cetak finalName ke console
  console.log("Final name:", finalName);

  return (
    <div className="nullish-container">
      <h2>User Information</h2>
      {
        /* 
        TODO: Tampilkan finalName di layar
        <p>Halo, {finalName}!</p>
      */
        <p>Halo, {finalName}!</p>
      }
    </div>
  );
}

export default NullishExample;

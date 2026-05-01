import React from "react";

function MapExample() {
  // Data karyawan mentah
  const people = [
    {
      name_lengkap: "John",
      age_nya: 25,
      hobbies_nya: ["reading", "hiking", "cooking"],
    },
    {
      name_lengkap: "Emily",
      age_nya: 30,
      hobbies_nya: ["gaming", "cooking", "photography"],
    },
    {
      name_lengkap: "Sarah",
      age_nya: 20,
      hobbies_nya: ["dancing", "cooking", "gardening"],
    },
  ];

  // TODO: Gunakan array method map di sini
  // buat array baru bernama "transformed"
  // yang isinya object { name, age, hobbies }.
  const transformed = people.map((person) => ({
    name: person.name_lengkap,
    age: person.age_nya,
    hobbies: person.hobbies_nya,
  }));

  // TODO: Cetak "transformed" ke console
  console.log("Transformed array:", transformed);

  return (
    <div className="map-container">
      <h2>Data Karyawan:</h2>
      {/* 
        TODO: Tampilkan data dari "transformed" di sini
        misalnya, list nama dan umur 
        <ul>
        {transformed.map((p, index) => (
          <li key={index}>
            ...
          </li>
        ))}
      </ul>
      */}
      <ul>
        {transformed.map((p, index) => (
          <li key={index}>
            {p.name} - {p.age} tahun - Hobi: {p.hobbies.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MapExample;

import React from "react";

function FindExample() {
  const people = [
    {
      name: "John",
      age: 25,
      hobbies: ["reading", "hiking", "painting"],
    },
    {
      name: "Emily",
      age: 30,
      hobbies: ["gaming", "cooking", "photography"],
    },
    {
      name: "Sarah",
      age: 20,
      hobbies: ["dancing", "swimming", "gardening"],
    },
  ];

  // TODO: Gunakan array method find untuk mencari user bernama "Emily"
  const foundUser = people.find((a) => a.name === "Emily");

  // TODO: Cetak foundUser ke console
  console.log("Found user:", foundUser);

  return (
    <div className="find-container">
      <h2>Array Find Example</h2>
      {/* 
        TODO: Tampilkan name, age, dan hobbies dari foundUser, 
        contohnya:
        <p>Name: {foundUser.name}</p>
        <p>Age: {foundUser.age}</p>
        <p>Hobbies: {foundUser.hobbies.join(', ')}</p>
      */}
      <p>Name: {foundUser.name}</p>
      <p>Age: {foundUser.age}</p>
      <p>Hobbies: {foundUser.hobbies.join(", ")}</p>
    </div>
  );
}

export default FindExample;

import React from "react";

function SomeExample() {
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

  // TODO: Gunakan array method some dan includes untuk cek apakah
  // ada orang yang punya hobby "cooking"
  const hasCooking = people.some((person) =>
    person.hobbies.includes("cooking"),
  );

  // TODO: Cetak hasCooking ke console
  console.log("Has cooking hobby?", hasCooking);

  return (
    <div className="some-container">
      <h2>Apakah ada yang hobi memasak ?</h2>
      {/* 
        TODO: Tampilkan pesan:
        - "Yes, someone loves cooking!" kalau hasCooking = true
        - "No one here likes cooking :(" kalo false
        {hasCooking ? (
        <p>Ya, ada yang hobi masak!</p>
      ) : (
        <p>Tidak ada yang hobi masak :(</p>
      )}
      */}
      {hasCooking ? (
        <p>Ya, ada yang hobi masak!</p>
      ) : (
        <p>Tidak ada yang hobi masak :(</p>
      )}
    </div>
  );
}

export default SomeExample;

import React from "react";

function FilterExample() {
  const people = [
    {
      name: "John",
      age: 25,
      hobbies: ["reading", "hiking", "cooking"],
    },
    {
      name: "Emily",
      age: 30,
      hobbies: ["gaming", "cooking", "photography"],
    },
    {
      name: "Sarah",
      age: 20,
      hobbies: ["dancing", "cooking", "gardening"],
    },
    {
      name: "Michael",
      age: 27,
      hobbies: ["reading", "sports"],
    },
  ];

  // TODO: Gunakan array method filter di sini
  // untuk dapatkan user yang punya hobi "cooking"
  const cookingFans = people.filter((users) =>
    users.hobbies.includes("cooking"),
  );

  // TODO: Cetak cookingFans ke console
  console.log("Users who love cooking:", cookingFans);

  return (
    <div className="filter-container">
      <h2>Daftar User Hobi Memasak:</h2>
      <ul className="filter-list">
        {/* 
        TODO: Tampilkan daftar nama user (from cookingFans) 
        yang punya hobi "cooking"
         {cookingFans.map((p, idx) => (
          <li key={idx}>{p.name} - Age {p.age}</li>
        ))}
      */}
        {cookingFans.map((p, idx) => (
          <li key={idx}>
            {p.name} - Age {p.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterExample;

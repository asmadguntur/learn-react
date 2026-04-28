import React from "react";

function SpreadOperatorPractice() {
  // List buah dan sayur
  const fruits = ["Apple", "Banana", "Orange"];
  const veggies = ["Carrot", "Broccoli"];

  // Info toko & lokasi
  const storeInfo = {
    storeName: "FreshMart",
    owner: "Sakura",
  };

  const locationInfo = {
    country: "Japan",
    city: "Tokyo",
  };

  // TODO: Gabungkan fruits dan veggies ke allItems (pakai spread operator)
  const allItems = [...fruits, ...veggies];

  // TODO: Gabungkan storeInfo dan locationInfo ke fullStoreData
  const fullStoreData = { ...storeInfo, ...locationInfo };

  // TODO: Cetak allItems dan fullStoreData ke console
  console.log("allItems:", allItems);
  console.log("fullStoreData:", fullStoreData);

  return (
    <div className="spread-container">
      <h2>Spread Operator Practice</h2>

      <h3>All Items (Fruits + Veggies):</h3>
      <ul>
        {allItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Full Store Data:</h3>
      <p>Store Name: {fullStoreData.storeName}</p>
      <p>Owner: {fullStoreData.owner}</p>
      <p>Country: {fullStoreData.country}</p>
      <p>City: {fullStoreData.city}</p>
    </div>
  );
}

export default SpreadOperatorPractice;

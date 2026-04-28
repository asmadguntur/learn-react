import React from "react";

function TernarySimple() {
  const isLoggedIn = false;
  const hasDiscount = true;

  // TODO: Cetak isLoggedIn dan hasDiscount ke console

  console.log("Is Logged In?", isLoggedIn);
  console.log("Has Discount?", hasDiscount);

  return (
    <div className="ternary-simple-container">
      <h2>Ternary Operator</h2>

      <p>
        {
          /* 
        TODO: Tampilkan pesan login: 
          - "Welcome back!" kalau isLoggedIn = true
          - "Please login to continue" kalau false
      */
          isLoggedIn ? "Welcome back!" : "Please login to continue"
        }
      </p>

      <p>
        {
          /* 
        TODO: Tampilkan pesan discount: 
          - "You have a discount code!" kalau hasDiscount = true
          - "No discount code" kalau false
      */ hasDiscount ? "You have a discount code!" : "No discount code"
        }
      </p>
    </div>
  );
}

export default TernarySimple;

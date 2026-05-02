import React from "react";
import "./styles.css";

export const SpyID = ({ name, codeName, isActive, clearanceLevel }) => {
  return (
    <div className="spy-card">
      <div className="card-header">
        {/* TODO 1: Tampilkan nama dengan HURUF KAPITAL (Uppercase) */}
        <h2>{name.toUpperCase()}</h2>
        <span className="badge">TOP SECRET</span>
      </div>

      <div className="card-body">
        {/* TODO 2: Tampilkan Code Name (Interpolasi) */}
        <p>
          <strong>Agent:</strong> {codeName}
        </p>

        {/* TODO 3: Gunakan Ternary Operator untuk Status (Active/Inactive) */}
        <p>
          <strong>Status:</strong> {isActive ? "Active" : "Inactive"}
        </p>

        {/* TODO 4: Tampilkan Access Score (clearanceLevel * 10) */}
        <p>
          <strong>Access Score:</strong> {clearanceLevel * 10}
        </p>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="container">
      <h1>Database Agen Rahasia</h1>
      <div className="grid">
        <SpyID
          name="James Bond"
          codeName="007"
          isActive={true}
          clearanceLevel={10}
        />
        <SpyID
          name="Johnny English"
          codeName="MI7"
          isActive={false}
          clearanceLevel={2}
        />
      </div>
    </div>
  );
}

import React from "react";
import "./styles.css";

const users = [
  {
    id: "usr-001",
    name: "Pimon",
    avatar: "https://i.pravatar.cc/150?u=usr-001",
  },
  {
    id: "usr-002",
    name: "Bisa",
    avatar: "https://i.pravatar.cc/150?u=usr-002",
  },
  {
    id: "usr-003",
    name: "React",
    avatar: "https://i.pravatar.cc/150?u=usr-003",
  },
];

export default function App() {
  return (
    <div className="container">
      <h1>Daftar Pengguna</h1>
      <div className="user-list">
        {users.map((user) => (
          // HINT: React butuh 'key' unik di sini biar ga ngambek.
          // Coba tambahkan prop `key` ke div di bawah ini.
          // Gunakan properti yang unik dari objek `user`.
          <div className="user-card">
            <img
              src={user.avatar}
              alt={user.name}
              key={users.id}
              className="avatar"
            />
            <h3>{user.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

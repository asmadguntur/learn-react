import React from "react";

// TODO: Definisikan interface EmployeeProps di sini
interface EmployeeProps {
  name: string;
  role: string;
  yearsOfExperience: number;
  isActive: boolean;
}

// Hint: Ganti 'any' dengan EmployeeProps agar type-safe
export const EmployeeCard = ({
  name,
  role,
  yearsOfExperience,
  isActive,
}: EmployeeProps) => {
  return (
    <div style={styles.card}>
      {/* TODO: Render props sesuai instruksi */}
      <h3>{name}</h3>

      {/* Ganti ini dengan data dinamis */}
      <p>Role: {role}</p>
      <p>{yearsOfExperience} Tahun Pengalaman</p>

      <div style={isActive ? styles.active : styles.inactive}>
        {/* Tampilkan 'Aktif' atau 'Cuti' berdasarkan isActive */}
        {isActive ? "Aktif" : "Cuti"}
      </div>
    </div>
  );
};

// Styles sederhana untuk visualisasi
const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "16px",
    borderRadius: "8px",
    maxWidth: "300px",
    fontFamily: "sans-serif",
  },
  active: { color: "green", fontWeight: "bold" },
  inactive: { color: "gray", fontStyle: "italic" },
};

export default function App() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <EmployeeCard
        name="Pimon"
        role="Senior Barista"
        yearsOfExperience={4}
        isActive={true}
      />
      <EmployeeCard
        name="Jojo"
        role="Intern"
        yearsOfExperience={1}
        isActive={false}
      />
    </div>
  );
}

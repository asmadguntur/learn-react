import React from 'react';

// HINT: Ubah parameter function agar menerima props tipe UserProps
export function UserProfile({name, role, imageUrl, isOnline}) {
  return (
    <div style={cardStyle}>
      <img 
        src={imageUrl}
        alt="User Avatar" 
        style={avatarStyle} 
      />
      <div>
        {/* Ganti teks statis ini dengan data dari props */}
        <h3>{name}</h3>
        <p style={{ margin: '5px 0', color: '#666' }}>{role}</p>
        
        {/* Gunakan logic: jika isOnline true -> "Online", jika false -> "Offline" */}
        <span style={statusStyle}>{isOnline ? 'Online' : 'Offline'}</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div style={containerStyle}>
      <h2>Daftar Tim (Static)</h2>
      <div style={gridStyle}>
        {/* TODO: Render UserProfile dengan props yang berbeda-beda di sini */}
        <UserProfile 
          name="John Doe" 
          role="Software Engineer" 
          imageUrl="https://via.placeholder.com/80" 
          isOnline={true} 
        />
        <UserProfile 
          name="Jane Smith" 
          role="Product Manager" 
          imageUrl="https://via.placeholder.com/80" 
          isOnline={false} 
        />
      </div>
    </div>
  );
}

// Styles (Abaikan bagian ini, fokus ke logic di atas)
const cardStyle = { border: '1px solid #ddd', padding: '20px', borderRadius: '12px', textAlign: 'center', background: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' };
const avatarStyle = { width: '80px', height: '80px', borderRadius: '50%', marginBottom: '10px' };
const statusStyle = { display: 'inline-block', padding: '4px 12px', borderRadius: '20px', background: '#eef', fontSize: '0.8rem', fontWeight: 'bold' };
const containerStyle = { fontFamily: 'sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto' };
const gridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' };
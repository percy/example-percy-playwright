export function Card({ updatedAt }) {
  return (
    <div className="card" style={{ width: 300, padding: 16, border: '2px solid #333', borderRadius: 8 }}>
      <h3 style={{ margin: 0 }}>Card title</h3>
      <p className="updated-at" style={{ margin: '8px 0', background: '#fdd' }}>Updated {updatedAt}</p>
      <span>Stable footer</span>
    </div>
  );
}

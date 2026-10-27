export function Button({ label, disabled }) {
  return (
    <button
      disabled={disabled}
      style={{
        padding: '12px 24px',
        border: 0,
        borderRadius: 6,
        fontSize: 18,
        color: '#fff',
        background: disabled ? '#999' : '#2a6df4'
      }}
    >
      {label}
    </button>
  );
}

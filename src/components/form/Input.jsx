function Input({ label, ...rest }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 12 }}>
      {label && <label style={{ fontSize: 14 }}>{label}</label>}
      <input
        style={{
          padding: "8px 10px",
          borderRadius: 4,
          border: "1px solid #cbd5e0",
          fontSize: 14,
        }}
        {...rest}
      />
    </div>
  );
}

export default Input;

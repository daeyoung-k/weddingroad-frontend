function Button({ children, type = "button", ...rest }) {
  return (
    <button
      type={type}
      style={{
        padding: "8px 16px",
        borderRadius: 6,
        border: "none",
        cursor: "pointer",
        fontSize: 14,
        backgroundColor: "#3182ce",
        color: "white",
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;

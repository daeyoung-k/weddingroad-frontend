function EmptyState({ message = "표시할 내용이 없습니다." }) {
  return (
    <div style={{ padding: 24, textAlign: "center", color: "#718096" }}>
      {message}
    </div>
  );
}

export default EmptyState;

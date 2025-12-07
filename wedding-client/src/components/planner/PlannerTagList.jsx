function PlannerTagList({ tags = [] }) {
  if (!tags.length) return null;
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
      {tags.map((tag) => (
        <span
          key={tag}
          style={{
            fontSize: 12,
            padding: "2px 8px",
            borderRadius: 999,
            backgroundColor: "#edf2f7",
            color: "#4a5568",
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default PlannerTagList;

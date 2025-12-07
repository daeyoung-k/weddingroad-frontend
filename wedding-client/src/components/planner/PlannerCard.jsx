import { Link } from "react-router-dom";

function PlannerCard({ planner }) {
  if (!planner) return null;
  const { id, name, regions = [], styles = [], minBudget, maxBudget, rating } = planner;

  return (
    <div
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        background: "white",
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: 8 }}>{name}</h3>
      <div style={{ fontSize: 13, color: "#4a5568", marginBottom: 4 }}>
        활동 지역: {regions.join(", ") || "-"}
      </div>
      <div style={{ fontSize: 13, color: "#4a5568", marginBottom: 4 }}>
        스타일: {styles.join(", ") || "-"}
      </div>
      <div style={{ fontSize: 13, color: "#4a5568", marginBottom: 4 }}>
        예산대: {minBudget} ~ {maxBudget} 만원
      </div>
      <div style={{ fontSize: 13, color: "#4a5568", marginBottom: 8 }}>평점: {rating ?? "-"} / 5</div>
      <Link to={`/planner/${id}`} style={{ fontSize: 14, color: "#3182ce" }}>
        상세 보기
      </Link>
    </div>
  );
}

export default PlannerCard;

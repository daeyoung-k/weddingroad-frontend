import { useParams } from "react-router-dom";
import PlannerTagList from "../../components/planner/PlannerTagList.jsx";

// TODO: 실제 API 연동
const DUMMY_PLANNER = {
  id: 1,
  name: "라이트웨딩 플래너",
  regions: ["서울", "경기"],
  styles: ["호텔", "하우스"],
  minBudget: 1500,
  maxBudget: 3000,
  rating: 4.8,
  description: "예산과 일정에 맞춘 현실적인 웨딩 플랜을 함께 설계합니다.",
};

function PlannerDetailPage() {
  const { id } = useParams();

  // TODO: id 기반으로 실제 데이터 로딩
  const planner = DUMMY_PLANNER;

  if (!planner) return <div>플래너 정보를 찾을 수 없습니다.</div>;

  return (
    <section>
      <h1>{planner.name}</h1>
      <p style={{ color: "#4a5568", marginBottom: 8 }}>{planner.description}</p>
      <div style={{ fontSize: 14, color: "#4a5568", marginBottom: 4 }}>
        활동 지역: {planner.regions.join(", ")}
      </div>
      <div style={{ fontSize: 14, color: "#4a5568", marginBottom: 4 }}>
        예산대: {planner.minBudget} ~ {planner.maxBudget} 만원
      </div>
      <div style={{ fontSize: 14, color: "#4a5568" }}>평점: {planner.rating} / 5</div>
      <PlannerTagList tags={planner.styles} />
    </section>
  );
}

export default PlannerDetailPage;

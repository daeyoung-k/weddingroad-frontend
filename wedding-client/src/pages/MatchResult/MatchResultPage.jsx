import PlannerCard from "../../components/planner/PlannerCard.jsx";
import EmptyState from "../../components/common/EmptyState.jsx";

// 임시 더미 데이터
const DUMMY_PLANNERS = [
  {
    id: 1,
    name: "라이트웨딩 플래너",
    regions: ["서울", "경기"],
    styles: ["호텔", "하우스"],
    minBudget: 1500,
    maxBudget: 3000,
    rating: 4.8,
  },
  {
    id: 2,
    name: "스몰데이 웨딩",
    regions: ["서울"],
    styles: ["스몰웨딩"],
    minBudget: 800,
    maxBudget: 2000,
    rating: 4.6,
  },
];

function MatchResultPage() {
  const planners = DUMMY_PLANNERS; // TODO: 전역 상태 또는 API에서 가져오기

  return (
    <section>
      <h1>매칭 결과</h1>
      <p style={{ fontSize: 14, color: "#4a5568" }}>
        입력하신 조건에 맞는 웨딩 플래너를 추천해 드렸어요.
      </p>

      {!planners.length && <EmptyState message="조건에 맞는 플래너가 없습니다." />}

      <div style={{ marginTop: 16 }}>
        {planners.map((planner) => (
          <PlannerCard key={planner.id} planner={planner} />
        ))}
      </div>
    </section>
  );
}

export default MatchResultPage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/form/Input.jsx";
import Select from "../../components/form/Select.jsx";
import BudgetRangeInput from "../../components/form/BudgetRangeInput.jsx";
import Button from "../../components/common/Button.jsx";

function MatchFormPage() {
  const navigate = useNavigate();
  const [budgetMin, setBudgetMin] = useState(1000);
  const [budgetMax, setBudgetMax] = useState(3000);
  const [weddingDate, setWeddingDate] = useState("");
  const [region, setRegion] = useState("서울");
  const [style, setStyle] = useState("호텔");
  const [memo, setMemo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 전역 상태 저장 or API 요청
    // 일단은 결과 페이지로 이동만 처리
    navigate("/results");
  };

  return (
    <section>
      <h1>웨딩 플래너 매칭 조건 입력</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 480 }}>
        <BudgetRangeInput
          min={budgetMin}
          max={budgetMax}
          onChangeMin={setBudgetMin}
          onChangeMax={setBudgetMax}
        />

        <Input
          label="결혼 예정일"
          type="date"
          value={weddingDate}
          onChange={(e) => setWeddingDate(e.target.value)}
        />

        <Select label="희망 지역" value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="서울">서울</option>
          <option value="경기">경기</option>
          <option value="인천">인천</option>
          <option value="부산">부산</option>
          <option value="대구">대구</option>
        </Select>

        <Select label="웨딩 스타일" value={style} onChange={(e) => setStyle(e.target.value)}>
          <option value="호텔">호텔</option>
          <option value="하우스">하우스</option>
          <option value="스몰웨딩">스몰웨딩</option>
          <option value="야외">야외</option>
        </Select>

        <div style={{ marginBottom: 12 }}>
          <label style={{ fontSize: 14, display: "block", marginBottom: 4 }}>추가 요청사항</label>
          <textarea
            rows={4}
            style={{
              width: "100%",
              padding: "8px 10px",
              borderRadius: 4,
              border: "1px solid #cbd5e0",
              fontSize: 14,
              resize: "vertical",
            }}
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="원하는 분위기, 필수 조건 등을 자유롭게 적어주세요."
          />
        </div>

        <Button type="submit">조건으로 플래너 찾기</Button>
      </form>
    </section>
  );
}

export default MatchFormPage;

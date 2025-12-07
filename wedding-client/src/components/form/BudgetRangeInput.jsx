import Input from "./Input.jsx";

function BudgetRangeInput({ min, max, onChangeMin, onChangeMax }) {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "flex-end", marginBottom: 12 }}>
      <div style={{ flex: 1 }}>
        <Input
          label="최소 예산"
          type="number"
          value={min}
          onChange={(e) => onChangeMin?.(Number(e.target.value))}
          placeholder="예: 1000 (단위: 만원)"
        />
      </div>
      <span>~</span>
      <div style={{ flex: 1 }}>
        <Input
          label="최대 예산"
          type="number"
          value={max}
          onChange={(e) => onChangeMax?.(Number(e.target.value))}
          placeholder="예: 3000 (단위: 만원)"
        />
      </div>
    </div>
  );
}

export default BudgetRangeInput;

// 가격, 날짜 등 공통 포맷터 유틸을 여기에 작성합니다.
export function formatPrice(value) {
  if (typeof value !== "number") return "";
  return new Intl.NumberFormat("ko-KR").format(value);
}

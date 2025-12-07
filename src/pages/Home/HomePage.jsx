import { Link } from "react-router-dom";
import Button from "../../components/common/Button.jsx";

function HomePage() {
  return (
    <section>
      <h1>예비부부를 위한 웨딩 플래너 매칭</h1>
      <p style={{ maxWidth: 640, lineHeight: 1.6 }}>
        예산, 날짜, 지역, 스타일에 맞는 웨딩 플래너를 한번에 찾아보세요.
        간단한 질문에만 답하면, 조건에 맞는 플래너를 추천해 드립니다.
      </p>
      <div style={{ marginTop: 24 }}>
        <Link to="/match">
          <Button>매칭 시작하기</Button>
        </Link>
      </div>
    </section>
  );
}

export default HomePage;

import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ borderBottom: "1px solid #e2e8f0", padding: "12px 16px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link to="/">
          <strong>WeddingMatch</strong>
        </Link>
        <nav style={{ display: "flex", gap: 12 }}>
          <Link to="/match">매칭 시작하기</Link>
          <Link to="/mypage">마이페이지</Link>
          <Link to="/login">로그인</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

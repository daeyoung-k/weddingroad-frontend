import Input from "../../components/form/Input.jsx";
import Button from "../../components/common/Button.jsx";

function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 로그인 로직
  };

  return (
    <section>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 360 }}>
        <Input label="이메일" type="email" required />
        <Input label="비밀번호" type="password" required />
        <Button type="submit">로그인</Button>
      </form>
    </section>
  );
}

export default LoginPage;

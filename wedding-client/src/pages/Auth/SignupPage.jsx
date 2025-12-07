import Input from "../../components/form/Input.jsx";
import Button from "../../components/common/Button.jsx";

function SignupPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 회원가입 로직
  };

  return (
    <section>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 360 }}>
        <Input label="이메일" type="email" required />
        <Input label="비밀번호" type="password" required />
        <Input label="이름" type="text" required />
        <Button type="submit">회원가입</Button>
      </form>
    </section>
  );
}

export default SignupPage;

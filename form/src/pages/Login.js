import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setCurrentUser, setLoggedIn, users }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userId = formData.get("id");
    const userPassword = formData.get("password");
    const user = users.find(
      (userFind) => userFind.id === userId && userFind.password === userPassword
    );
    if (user) {
      setCurrentUser(user);
      setLoggedIn(true);
      navigate("/");
    } else {
      alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };
  return (
    <section className="section section-login">
      <div className="login-container">
        <h3>로그인</h3>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="login-row">
            <label htmlFor="id">아이디</label>
            <input type="text" id="id" name="id" />
          </div>
          <div className="login-row">
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" name="password" />
          </div>
          <button>로그인</button>
          <p>
            계정이 없으신가요? <Link to="register">회원가입</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;

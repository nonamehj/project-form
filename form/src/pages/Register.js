import React from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ setUsers, users }) => {
  const navigate = useNavigate();

  const formmatPhoneNumber = (phoneNumber) => {
    const cleaned = phoneNumber.replace(/[^0-9]/g, "");
    const formatted = cleaned.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    return formatted;
  };
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData);
    const isDuplicateId = users.some((user) => user.id === newUser.id);
    newUser.phone = formmatPhoneNumber(newUser.phone);
    if (
      !newUser.id ||
      !newUser.password ||
      !newUser.nickname ||
      !newUser.email ||
      !newUser.phone
    ) {
      alert("모든 필드를 작성해주세요.");
      return;
    }
    if (!validateEmail(newUser.email)) {
      alert("유효한 이메일 주소를 입력하세요.");
      return;
    }
    if (isDuplicateId) {
      alert("중복된 아이디 입니다.");
      return;
    }

    if (newUser.id && newUser.password && newUser.nickname && newUser.email) {
      setUsers((user) => [...user, newUser]);
      e.currentTarget.reset();
      navigate("/");
    }
  };

  return (
    <section className="section section-register">
      <div className="register-container">
        <h3>회원가입</h3>
        <form action="" className="form-register form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="id" className="form-label">
              아이디
            </label>
            <input type="text" id="id" name="id" className="form-input" />
          </div>
          <div className="form-row">
            <label htmlFor="password" className="form-label">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
            />
          </div>
          <div className="form-row">
            <label htmlFor="nickname" className="form-label">
              닉네임
            </label>
            <input
              type="text"
              id="nickname"
              name="nickname"
              className="form-input"
            />
          </div>
          <div className="form-row">
            <label htmlFor="phone" className="form-label">
              핸드폰번호
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-input"
              placeholder="010-1234-5678"
            />
          </div>
          <div className="form-row">
            <label htmlFor="email" className="form-label">
              이메일
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
            />
          </div>
          <button>회원가입</button>
        </form>
      </div>
    </section>
  );
};

export default Register;

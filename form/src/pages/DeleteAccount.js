import React from "react";
import { useNavigate } from "react-router";

const DeleteAccount = ({
  currentUser,
  setUsers,
  setLoggedIn,
  setCurrentUser,
}) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const deleteUser = new FormData(e.currentTarget);
    const id = deleteUser.get("id");
    const password = deleteUser.get("password");
    if (currentUser.id === id && currentUser.password === password) {
      setUsers((user) =>
        user.filter(
          (userAccount) =>
            userAccount.id !== id && userAccount.password !== password
        )
      );
      setLoggedIn(false);
      setCurrentUser(null);
      navigate("/");
    } else {
      alert("id 또는 비밀번호 틀림");
    }
  };
  return (
    <section className="section section-delete">
      <div className="delete-container">
        <h3>계정삭제</h3>
        <form action="" className="form" onSubmit={handleSubmit}>
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
          <button className="delete-btn">계정삭제</button>
        </form>
      </div>
    </section>
  );
};

export default DeleteAccount;

import React from "react";
import { Link } from "react-router-dom";
const Home = ({ loggedIn, currentUser, setCurrentUser, setLoggedIn }) => {
  const handleLogout = () => {
    setLoggedIn(false);
    setCurrentUser(null);
  };
  return (
    <main>
      <div className="home">
        <h3>
          {loggedIn ? `${currentUser.nickname}님, 안녕하세요` : "안녕하세요"}
        </h3>
        <ul className="links">
          {loggedIn ? (
            <>
              <li>
                <Link to="/" onClick={handleLogout} className="btn">
                  로그아웃
                </Link>
              </li>
              <li>
                <Link to="/login/delete" className="btn">
                  계정삭제
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="login">로그인</Link>
              </li>
              <li>
                <Link to="/login/register">회원가입</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </main>
  );
};

export default Home;

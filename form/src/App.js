import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import SharedLayoutHome from "./pages/SharedLayoutHome";
import { Home, Login, Register, DeleteAccount } from "./pages";

const getLocalStorage = () => {
  let users = localStorage.getItem("users");
  if (users) {
    return (users = JSON.parse(localStorage.getItem("users")));
  }
  return [];
};

function App() {
  const [users, setUsers] = useState(getLocalStorage());
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayoutHome />}>
          <Route
            index
            element={
              <Home
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                setCurrentUser={setCurrentUser}
                currentUser={currentUser}
              />
            }
          />
          <Route
            path="login"
            element={
              <Login
                setLoggedIn={setLoggedIn}
                users={users}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/login/register"
            element={
              <Register
                users={users}
                setUsers={setUsers}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/login/delete"
            element={
              <DeleteAccount
                setUsers={setUsers}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                setLoggedIn={setLoggedIn}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

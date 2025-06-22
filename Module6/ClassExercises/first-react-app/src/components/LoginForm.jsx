import { useState, useContext } from "react";
import { useUserContext } from "../context/UserContext";
import { MyThemeContext } from "../context/MyThemeContext";

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  const { theme, darkMode } = useContext(MyThemeContext);

  // Correct usage of context
  const { currentUser, handleUpdateUser } = useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
      setSubmitResult("Successful Login");
      handleUpdateUser({ email: userEmail });
    }
  };

  if (currentUser.email)
    return (
      <>
        <p>Welcome {currentUser.email}!</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
      </>
    );

  return (
    <div
      className="LoginForm componentBox"
      style={{ background: theme.background, color: theme.foreground }}
    >
      <div className="formRow">
        <label>
          Email Address:
          <input
            type="email"
            value={userEmail}
            name="userEmail"
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="formRow">
        <label>
          Password:
          <input
            type="password"
            value={userPassword}
            name="password"
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </label>
      </div>
      <form onSubmit={handleSubmit}>
        <button>Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;

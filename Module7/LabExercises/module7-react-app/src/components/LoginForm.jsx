import { useState, useContext } from "react";
import { useUserContext } from "../context/UserContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");

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
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: 300,
        mx: "auto",
      }}
    >
      <TextField
        variant="standard"
        label="Email Address"
        type="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        required
        sx={{
          input: { color: "white" },
          label: { color: "white" },
          "& .MuiInput-underline:before": { borderBottomColor: "white" },
          "& .MuiInput-underline:after": { borderBottomColor: "white" },
        }}
      />
      <TextField
        variant="standard"
        label="Password"
        type="password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
        required
        sx={{
          input: { color: "white" },
          label: { color: "white" },
          "& .MuiInput-underline:before": { borderBottomColor: "white" },
          "& .MuiInput-underline:after": { borderBottomColor: "white" },
        }}
      />
      <Button type="submit" variant="contained">
        Log In
      </Button>
    </Box>
  );
}

export default LoginForm;

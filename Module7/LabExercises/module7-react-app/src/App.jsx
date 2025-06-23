import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { EmojiProvider } from "./context/EmojiContext.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import NavBar from "./components/NavBar.jsx";
import { UserProvider } from "./context/UserContext.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserProvider>
        <EmojiProvider>
          <NavBar />
          <AppRoutes />
        </EmojiProvider>
      </UserProvider>
    </>
  );
}

export default App;

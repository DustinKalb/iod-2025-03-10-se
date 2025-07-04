import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MoviesList from "./components/MoviesList.jsx";
import MoodChanger from "./components/MoodChanger.jsx";
import BirthdayTranslator from "./components/BirthdayTranslator.jsx";
import LoginForm from "./components/LoginForm.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import MyThemeProvider from "./context/MyThemeContext.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import NavBar from "./components/NavBar.jsx";

function ExampleComponent() {
  return (
    <div className="ExampleComponent componentBox">
      <h1>My Example Component</h1>
      <p>My first React component!</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ExampleComponent />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <UserProvider>
        <MyThemeProvider>
          <MoviesList />
          <MoodChanger />
          <BirthdayTranslator />
          <LoginForm />
          <NavBar />
          <AppRoutes />
        </MyThemeProvider>
      </UserProvider>
    </>
  );
}

export default App;

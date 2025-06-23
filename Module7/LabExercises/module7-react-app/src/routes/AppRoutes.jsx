import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage.jsx";
import BitcoinRatesPage from "../pages/BitcoinRatesPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";

function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<Homepage {...props} />} />

      <Route path="/login" element={<LoginPage {...props} />} />

      <Route path="/bitcoinrates" element={<BitcoinRatesPage {...props} />} />
    </Routes>
  );
}

export default AppRoutes;

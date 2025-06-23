import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <ul className="menu" style={{ listStyleType: "none" }}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/bitcoinrates">Bitcoin Rates</NavLink>
        </li>
      </ul>
    </nav>
  );
}

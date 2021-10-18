import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/episodes">
            <span>F</span>olgen
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/characters">
            <span>C</span>haraktere
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/actors">
            <span>S</span>chauspieler
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

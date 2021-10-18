import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/episodes">
            <span>E</span>pisoden
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/actors">
            <span>S</span>chauspieler
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/characters">
            <span>C</span>haraktere
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

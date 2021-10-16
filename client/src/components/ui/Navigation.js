import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/episodes">
            Episoden
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/actors">
            Schauspieler
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/characters">
            Charaktere
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

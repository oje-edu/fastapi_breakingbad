import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/episodes" exact>
            Episoden
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/actors" exact>
            Schauspieler
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/characters" exact>
            Charaktere
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

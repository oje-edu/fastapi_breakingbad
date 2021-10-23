import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/episodes">
            <span className="text-gradient">T</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/characters">
            <span className="text-gradient">O</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/actors">
            <span className="text-gradient">)</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

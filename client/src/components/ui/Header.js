import { useHistory } from "react-router-dom";
import Navigation from "./Navigation";
import logo from "../../img/logo.png";

const Header = () => {
  let history = useHistory();
  return (
    <>
      <header className="center">
        <img
          className="header-link"
          onClick={() => history.push(`/`)}
          src={logo}
          alt=""
        />
        <Navigation />
      </header>
    </>
  );
};

export default Header;

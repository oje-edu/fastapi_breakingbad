import { useHistory } from "react-router-dom";
import Navigation from "./Navigation";
import logo from "../../img/logo.webp";

const Header = () => {
  let history = useHistory();
  return (
    <>
      <header className="center">
        <div className="header-link" onClick={() => history.push(`/`)}>
          <p>1</p>
        </div>
        {/* <img
          className="header-link"
          onClick={() => history.push(`/`)}
          src={logo}
          alt=""
        /> */}
        <Navigation />
      </header>
    </>
  );
};

export default Header;

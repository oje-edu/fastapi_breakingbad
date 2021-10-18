import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import CopyrightNotice from "../../pages/CopyrightNotice";
const Footer = () => {
  return (
    <div className="footer">
      <p>
        <a
          href="https://github.com/oje-edu/fastapi_breakingbad"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>{" "}
        | <Link to="/notice">Notiz</Link>
      </p>
    </div>
  );
};

export default Footer;

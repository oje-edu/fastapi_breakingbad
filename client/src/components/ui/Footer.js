import { Link } from "react-router-dom";
import { FaGithub, FaInfo } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
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
        </a>
      </p>
      <p>
        <a
          href="https://bbdevapi.oje.guru/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineApi className="icon" />
        </a>
      </p>
      <p>
        <Link to="/notice">
          <FaInfo className="icon" />
        </Link>
      </p>
    </div>
  );
};

export default Footer;

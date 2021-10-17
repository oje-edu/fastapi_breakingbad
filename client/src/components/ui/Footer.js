import { FaGithub } from "react-icons/fa";
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
    </div>
  );
};

export default Footer;

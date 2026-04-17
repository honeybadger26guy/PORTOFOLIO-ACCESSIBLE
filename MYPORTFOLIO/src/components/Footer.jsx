import { FaGithub, FaLinkedin, FaTwitter  } from "react-icons/fa";

function Footer() {
  return(
    <footer className="footer">

      <p>©{ new Date().getFullYear()} Jeremiah. All rights reserved.</p>

      <div className="socials">
        <a href="#" target="_blank"><FaGithub /></a>
        <a href="#" target="_blank"><FaLinkedin /></a>
        <a href="#" target="_blank"><FaTwitter /></a>
      </div>

    </footer>
  );
}

export default Footer;
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // Track active setion on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="navbar">
      <h2 className="logo">MyPortfolio</h2>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home" className={active === "home" ? "active" : ""}>Home</a></li>
        <li><a href="#about" className={active === "about" ? "active" : ""}>About</a></li>
        <li><a href="#projects" className={active === "projects" ? "active" : ""}>Projects</a></li>
        <li><a href="#contact" className={active === "contact" ? "active" : ""}>Contact</a></li>

        {/* Theme Toggle */}
        <button onClick={toggleTheme}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </ul>

      {/* Mobile Menu */}
      <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
      </div> 
    </nav>
  );
}

export default Navbar;
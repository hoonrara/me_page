import { Link } from "react-scroll";

function Header() {
  const navClass = "cursor-pointer text-gray-600 hover:text-blue-500";

  return (
    <header className="bg-white shadow-md p-4 fixed top-0 left-0 right-0 z-10">
      <nav className="flex justify-center gap-6 text-lg">
        <Link to="home" smooth duration={500} className={navClass}>Home</Link>
        <Link to="about" smooth duration={500} className={navClass}>About</Link>
        <Link to="skills" smooth duration={500} className={navClass}>Skills</Link>
        <Link to="projects" smooth duration={500} className={navClass}>Projects</Link>
        <Link to="contact" smooth duration={500} className={navClass}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;

import { useState } from "react";
import styles from "./Navbar.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClose = () => {
    setNav(!nav);
  };

  return (
    <header className={styles.navbar}>
      <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} alt="drive logo" />
      </Link>
      <nav>
        <ul
          className={
            nav ? [styles.menu, styles.active].join(" ") : [styles.menu]
          }
        >
          <li>
            <Link onClick={handleClose} to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handleClose} to={"learnmore"}>
              Learn More
            </Link>
          </li>
          <li>
            <Link onClick={handleClose} to={"office"}>
              Our Offices
            </Link>
          </li>
          <li>
            <a href="/">Log in</a>
          </li>
          <li>
            <a href="/">Sign up</a>
          </li>
        </ul>
      </nav>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
    </header>
  );
};

export default Navbar;

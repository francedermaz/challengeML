import Link from "next/link";
import styles from "../styles/NavBar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">
            <img src="/assets/logo.png" alt="MercadoLibre" />
          </Link>
        </li>
        <li>
          <form>
            <input type="text" placeholder="Nunca dejes de buscar" />
            <button type="submit">Buscar</button>
          </form>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

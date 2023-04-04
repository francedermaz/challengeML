import { useState } from "react";
import Link from "next/link";
import styles from "../styles/NavBar.module.scss";
import { useRouter } from "next/router";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = async (event) => {
    event.preventDefault();
    if (searchQuery.trim() === "") return;
    router.push(`/items?search=${searchQuery}`);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">
            <img
              className={styles.logo}
              src="/assets/logo.png"
              alt="MercadoLibre"
            />
          </Link>
        </li>
        <li>
          <form onSubmit={handleSearch}>
            <div className={styles.search}>
              <input
                type="text"
                placeholder="Nunca dejes de buscar"
                value={searchQuery}
                onChange={handleInputChange}
              />
              <button type="submit">
                <img
                  className={styles.icon}
                  src="/assets/search.png"
                  alt="Search"
                />
              </button>
            </div>
          </form>
        </li>
      </ul>
    </nav>
  );
}

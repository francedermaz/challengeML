import { useRouter } from "next/router";
import { searchHandler } from "../api/items";
import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import styles from "../styles/Items.module.scss";
import Card from "../components/Card";

export default function Items() {
  const router = useRouter();
  const searchQuery = router.query.search;
  const [searchResults, setSearchResults] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery) {
        const response = await searchHandler(searchQuery);
        setSearchResults(response);
        setCategories(response.categories);
        localStorage.setItem("categories", JSON.stringify(response.categories));
      }
    };
    fetchData();
  }, [searchQuery]);

  useEffect(() => {
    const categoriesFromStorage = JSON.parse(
      localStorage.getItem("categories")
    );
    if (categoriesFromStorage) {
      setCategories(categoriesFromStorage);
    }
  }, []);

  return (
    <div className={styles.content}>
      <Breadcrumb categories={categories} />
      <ul className={styles.results}>
        {searchResults?.items?.slice(0, 4).map((item) => (
          <Card
            id={item.id}
            key={item.id}
            title={item.title}
            price={item.price}
            picture={item.picture}
            location={item.location}
            freeShipping={item.free_shipping}
          />
        ))}
      </ul>
    </div>
  );
}

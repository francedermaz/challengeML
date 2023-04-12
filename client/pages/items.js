import { useRouter } from "next/router";
import { searchHandler } from "../api/items";
import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import styles from "../styles/Items.module.scss";
import Card from "../components/Card";
import Head from "next/head";

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
    <>
      <Head>
        <title>{`Resultados de búsqueda para ${searchQuery}`}</title>
        <meta
          name="description"
          content={`Resultados de búsqueda para ${searchQuery}`}
        />
      </Head>
      <div className={styles.content}>
        <ul className={styles.results}>
          <div className={styles.breadcrumb}>
            <Breadcrumb categories={categories} />
          </div>
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
    </>
  );
}

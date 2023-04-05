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

  useEffect(() => {
    const fetchData = async () => {
      const response = await searchHandler(searchQuery);
      setSearchResults(response);
    };
    fetchData();
  }, [searchQuery]);

  if (!searchResults) {
    return <div></div>;
  }

  return (
    <div className={styles.content}>
      <Breadcrumb categories={searchResults.categories} />
      <ul>
        {searchResults?.items?.slice(0, 4).map((item) => (
          <Card
            id={item.id}
            title={item.title}
            price={item.price}
            picture={item.picture}
            freeShipping={item.free_shipping}
          />
        ))}
      </ul>
    </div>
  );
}

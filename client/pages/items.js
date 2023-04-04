import { useRouter } from "next/router";
import searchHandler from "../api/items";
import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";

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
    <div>
      <Breadcrumb categories={searchResults.categories} />
      <ul>
        {searchResults?.items?.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>
              {item.price.currency} {item.price.amount}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

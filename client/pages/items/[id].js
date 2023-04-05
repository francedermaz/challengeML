import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getItemDetails } from "../../api/items";

const ItemDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await getItemDetails(id);
      setDetails(res);
    };

    if (id) {
      fetchDetails();
    }
  }, [id]);

  return (
    <div>
      {details && (
        <div>
          <h1>{details.item.title}</h1>
          <img src={details.item.picture} alt={details.item.title} />
          <p>${details.item.price.amount}</p>
          <p>{details.item.description}</p>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;

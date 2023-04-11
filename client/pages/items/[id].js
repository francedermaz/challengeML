import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getItemDetails } from "../../api/items";
import Breadcrumb from "../../components/Breadcrumb";
import styles from "../../styles/ItemDetail.module.scss";

const ItemDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [details, setDetails] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await getItemDetails(id);
      setDetails(res);
    };

    if (id) {
      fetchDetails();
    }
  }, [id]);

  useEffect(() => {
    const categoriesFromStorage = JSON.parse(
      localStorage.getItem("categories")
    );
    if (categoriesFromStorage) {
      setCategories(categoriesFromStorage);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Breadcrumb categories={categories} />
      </div>
      {details && (
        <div className={styles.detailsContainer}>
          <div className={styles.pictureDetails}>
            <div className={styles.imageContainer}>
              <img src={details.item.picture} alt={details.item.title} />
            </div>
            <div className={styles.infoContainer}>
              <p className={styles.condition}>
                {details.item.condition} - {details.item.sold_quantity} vendidos
              </p>
              <h1 className={styles.title}>{details.item.title}</h1>
              <p className={styles.price}>$ {details.item.price.amount}</p>
              <button className={styles.buyButton}>Comprar</button>
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <h2 className={styles.descriptionTitle}>
              Descripción del producto
            </h2>
            <p className={styles.description}>{details.item.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;

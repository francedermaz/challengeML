import Link from "next/link";
import styles from "../styles/Card.module.scss";

export default function Card({ id, title, price, picture, freeShipping }) {
  return (
    <Link href={`/items/${id}`}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={picture} alt={title} />
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.priceContainer}>
            <span className={styles.currency}>{price.currency}</span>
            <span className={styles.amount}>{price.amount}</span>
            {price.decimals > 0 && (
              <span className={styles.decimals}>{price.decimals}</span>
            )}
            {freeShipping && (
              <img
                src="/assets/ic_shipping.png"
                alt="Envío gratis"
                className={styles.freeShippingIcon}
              />
            )}
          </div>
          <h2 className={styles.title}>{title}</h2>
        </div>
      </div>
    </Link>
  );
}

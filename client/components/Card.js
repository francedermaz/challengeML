import Link from "next/link";
import styles from "../styles/Card.module.scss";

export default function Card({
  id,
  title,
  price,
  picture,
  location,
  freeShipping,
}) {
  return (
    <Link href={`/items/${id}`}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={picture} alt={title} />
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.priceNameContainer}>
            <div className={styles.priceContainer}>
              <span className={styles.amount}>
                ${" "}
                {price.amount.toLocaleString("es-AR", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                })}
              </span>
              {freeShipping && (
                <div className={styles.freeShippingIconContainer}>
                  <img
                    src="/assets/shipping.png"
                    alt="Free shipping"
                    className={styles.freeShippingIcon}
                  />
                </div>
              )}
            </div>
            <h2 className={styles.title}>{title}</h2>
          </div>
          <div className={styles.shipping}>
            <span className={styles.location}>{location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

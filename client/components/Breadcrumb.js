import Link from "next/link";
import styles from "../styles/Breadcrumb.module.scss";

export default function Breadcrumb({ categories }) {
  return (
    <div className={styles.breadcrumb}>
      {categories?.map((item, index) => {
        return (
          <div key={index}>
            <Link href={`/items?search=${item}`}>
            <span className={styles.span}>{item}</span>
            </Link>
            {index < categories.length - 1 && <span className={styles.span}> &gt; </span>}
          </div>
        );
      })}
    </div>
  );
}

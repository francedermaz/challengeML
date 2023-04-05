import styles from "../styles/Breadcrumb.module.scss";

export default function Breadcrumb({categories}) {
  return (
    <div className={styles.breadcrumb}>
      {categories?.map((item, index) => {
        return (
          <div key={index}>
            <span>{item}</span>
            {index < categories.length - 1 && <span> &gt; </span>}
          </div>
        );
      })}
    </div>
  );
}

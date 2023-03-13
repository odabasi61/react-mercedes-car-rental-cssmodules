import styles from "./Office.module.css";

const Card = ({ img, city, icon, info }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={img} alt="" />
      </div>
      <div className={styles.info}>
        <div className={styles.place}>
          <p>
            <span>{icon}</span> {city}
          </p>
        </div>
        <div className={styles.detail}>
          <p>
            <span>{info}</span> Detailed Info
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

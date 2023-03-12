import styles from "./Quote.module.css";

const Card = ({ icon, star, comment, name }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.star}>
        <span>{star}</span>
        <span>{star}</span>
        <span>{star}</span>
        <span>{star}</span>
        <span>{star}</span>
      </div>
      <div>
        <h5>{name}</h5>
      </div>
      <div>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Card;

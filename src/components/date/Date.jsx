import styles from "./Date.module.css";

const Date = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.reservation}>
          <div className={styles.left}>
            <div className={styles.from}>
              <label htmlFor="from">From</label>
              <input
                type="text"
                id="from"
                placeholder="Where will you take the car from?"
              />
            </div>
            <div className={styles.to}>
              <label htmlFor="to">To</label>
              <input
                type="text"
                id="to"
                placeholder="Where will you submit the car?"
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.pickdate}>
              <label htmlFor="pick">Pickup Date</label>
              <input type="date" id="pick" />
            </div>
            <div className={styles.submitdate}>
              <label htmlFor="submit">Submit Date</label>
              <input type="date" id="submit" />
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <button className={styles.btn}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Date;

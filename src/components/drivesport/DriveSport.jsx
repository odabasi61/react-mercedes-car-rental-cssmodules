import styles from "./Drivesport.module.css";
import drivesport from "../../images/spor.png";

const DriveSport = () => {
  return (
    <div className={styles.driver}>
      <div className={styles.left}>
        <img src={drivesport} alt="mercedes race car" />
      </div>
      <div>
        <h2>
          Experience the thrill of speed{" "}
          <span>with the new Mercedes sports cars</span>
        </h2>
        <p>
          Are you looking for the ultimate driving experience? Look no further
          than the new Mercedes-Benz sports cars!
        </p>
        <button>Browse Cars</button>
      </div>
    </div>
  );
};

export default DriveSport;

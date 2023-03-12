import styles from "./Sport.module.css";
import sport1 from "../../images/sport1.jpg";
import sport2 from "../../images/sport2.jpg";
import sport3 from "../../images/sport3.jpg";
import sport4 from "../../images/sport4.jpg";
import { Link } from "react-router-dom";

const Sport = () => {
  return (
    <div className={styles.sport}>
      <div className={styles.heading}>
        <h1>Sport Selection</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Select from the top sport Mercedes models</span>
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <Link to={"amggt63s"} className={styles.card}>
          <img src={sport1} alt="AMG GT63 S" />
          <div className={styles.content}>
            <h3>AMG GT63 S</h3>
          </div>
        </Link>
        <div className={styles.card}>
          <img src={sport2} alt="SLS AMG" />
          <div className={styles.content}>
            <h3>SLS AMG</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img src={sport3} alt="CLA AMG" />
          <div className={styles.content}>
            <h3>CLA AMG</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img src={sport4} alt="C Class Coupé" />
          <div className={styles.content}>
            <h3>C Class Coupé</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sport;

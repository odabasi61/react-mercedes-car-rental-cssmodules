import styles from "./Luxury.module.css";
import lux1 from "../../images/lux1.jpg";
import lux2 from "../../images/lux2.jpg";
import lux3 from "../../images/lux3.jpg";
import lux4 from "../../images/lux4.jpg";
import { Link } from "react-router-dom";

const Luxury = () => {
  return (
    <div className={styles.luxury}>
      <div className={styles.heading}>
        <h1>Luxury Selection</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Select from the top luxury Mercedes models</span>
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <Link to={"vision"} className={styles.card}>
          <img src={lux1} alt="vision 6" />
          <div className={styles.content}>
            <h3>Vision 6</h3>
          </div>
        </Link>
        <Link to={"maybachs650"} className={styles.card}>
          <img src={lux2} alt="Maybach S650" />
          <div className={styles.content}>
            <h3>Maybach S650</h3>
          </div>
        </Link>
        <Link to={"maybachs580"} className={styles.card}>
          <img src={lux3} alt="Maybach S580" />
          <div className={styles.content}>
            <h3>Maybach S580</h3>
          </div>
        </Link>
        <Link to={"sclass"} className={styles.card}>
          <img src={lux4} alt="S 600" />
          <div className={styles.content}>
            <h3>S 600</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Luxury;

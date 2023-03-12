import styles from "./Suv.module.css";
import suv1 from "../../images/suv1.jpg";
import suv2 from "../../images/suv2.jpg";
import suv3 from "../../images/suv3.jpg";
import suv4 from "../../images/suv4.jpg";

const Suv = () => {
  return (
    <div className={styles.luxury}>
      <div className={styles.heading}>
        <h1>SUV Selection</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Select from the top SUV Mercedes models</span>
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.card}>
          <img src={suv1} alt="GLE Coupé" />
          <div className={styles.content}>
            <h3>GLE Coupé</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img src={suv2} alt="EQS Suv" />
          <div className={styles.content}>
            <h3>EQS Suv</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img src={suv3} alt="GLS 600 Maybach" />
          <div className={styles.content}>
            <h3>GLS 600 Maybach</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img src={suv4} alt="G Class" />
          <div className={styles.content}>
            <h3>G Class</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suv;

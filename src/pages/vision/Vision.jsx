import Date from "../../components/date/Date";
import Info from "../../components/info/Info";
import styles from "./Vision.module.css";
import vision from "../../images/lux1.jpg";

const Vision = () => {
  return (
    <div>
      <Date />
      <div className={styles.rentcard}>
        <div className={styles.image}>
          <img src={vision} alt="amg gt 63 s" />
        </div>
        <div className={styles.info}>
          <Info name="Vision 6" price="$2999" seat="2 Seats" />
        </div>
      </div>
    </div>
  );
};

export default Vision;

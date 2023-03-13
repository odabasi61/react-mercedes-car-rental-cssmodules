import Date from "../../components/date/Date";
import Info from "../../components/info/Info";
import styles from "./Maybach.module.css";
import maybach from "../../images/lux3.jpg";

const Maybach = () => {
  return (
    <div>
      <Date />
      <div className={styles.rentcard}>
        <div className={styles.image}>
          <img src={maybach} alt="amg gt 63 s" />
        </div>
        <div className={styles.info}>
          <Info name="Maybach S580" price="$2499" seat="4 Seats" />
        </div>
      </div>
    </div>
  );
};

export default Maybach;

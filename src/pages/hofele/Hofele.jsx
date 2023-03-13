import Date from "../../components/date/Date";
import Info from "../../components/info/Info";
import styles from "./Hofele.module.css";
import hofele from "../../images/lux2.jpg";

const Hofele = () => {
  return (
    <div>
      <Date />
      <div className={styles.rentcard}>
        <div className={styles.image}>
          <img src={hofele} alt="amg gt 63 s" />
        </div>
        <div className={styles.info}>
          <Info name="Maybach S650" price="$2999" seat="4 Seats" />
        </div>
      </div>
    </div>
  );
};

export default Hofele;

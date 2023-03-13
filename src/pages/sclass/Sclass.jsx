import Date from "../../components/date/Date";
import styles from "./Sclass.module.css";
import Info from "../../components/info/Info";
import sclass from "../../images/lux4.jpg";

const Sclass = () => {
  return (
    <div>
      <Date />
      <div className={styles.rentcard}>
        <div className={styles.image}>
          <img src={sclass} alt="amg gt 63 s" />
        </div>
        <div className={styles.info}>
          <Info name="S 600 Long" price="$1899" seat="4 Seats" />
        </div>
      </div>
    </div>
  );
};

export default Sclass;

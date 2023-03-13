import Date from "../../components/date/Date";
import Info from "../../components/info/Info";
import styles from "./CclassCoupe.module.css";
import cClass from "../../images/sport4.jpg";

const CclassCoupe = () => {
  return (
    <div>
      <Date />
      <div className={styles.rentcard}>
        <div className={styles.image}>
          <img src={cClass} alt="amg gt 63 s" />
        </div>
        <div className={styles.info}>
          <Info name="C Class Coupé" price="$1199" seat="2 Seats" />
        </div>
      </div>
    </div>
  );
};

export default CclassCoupe;

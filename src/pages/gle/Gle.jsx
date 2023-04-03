import Date from "../../components/date/Date";
import Info from "../../components/info/Info";
import styles from "./Gle.module.css";
import gle from "../../images/suv1.jpg";

const Gle = () => {
  return (
    <div>
      <Date />
      <div className={styles.rentcard}>
        <div className={styles.image}>
          <img src={gle} alt="amg gt 63 s" />
        </div>
        <div className={styles.info}>
          <Info
            name="GLE Coupé"
            price="$999"
            seat="5 Seats"
            fuel="8 lt/100 km"
            speed="4.6 sec/100km"
          />
        </div>
      </div>
    </div>
  );
};

export default Gle;

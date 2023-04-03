import Date from "../../components/date/Date";
import styles from "./AmgGt.module.css";
import amg from "../../images/sport1.jpg";
import Info from "../../components/info/Info";

const AmgGt = () => {
  return (
    <div>
      <Date />
      <div className={styles.rentcard}>
        <div className={styles.image}>
          <img src={amg} alt="amg gt 63 s" />
        </div>
        <div className={styles.info}>
          <Info
            name="AMG GT63 S"
            price="$1899"
            seat="4 Seats"
            fuel="8.2 lt/100 km"
            speed="3.3 sec/100km"
          />
        </div>
      </div>
    </div>
  );
};

export default AmgGt;

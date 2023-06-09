import Date from "../../components/date/Date";
import Info from "../../components/info/Info";
import styles from "./ClaAmg.module.css";
import cla from "../../images/sport3.jpg";

const ClaAmg = () => {
  return (
    <div>
      <Date />
      <div className={styles.rentcard}>
        <div className={styles.image}>
          <img src={cla} alt="amg gt 63 s" />
        </div>
        <div className={styles.info}>
          <Info
            name="CLA AMG"
            price="$899"
            seat="4 Seats"
            fuel="8.5 lt/100 km"
            speed="5.1 sec/100km"
          />
        </div>
      </div>
    </div>
  );
};

export default ClaAmg;

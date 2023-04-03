import Date from "../../components/date/Date";
import Info from "../../components/info/Info";
import styles from "./SlsAmg.module.css";
import sls from "../../images/sport2.jpg";

const SlsAmg = () => {
  return (
    <div>
      <Date />
      <div className={styles.rentcard}>
        <div className={styles.image}>
          <img src={sls} alt="amg gt 63 s" />
        </div>
        <div className={styles.info}>
          <Info
            name="SLS AMG"
            price="$1499"
            seat="2 Seats"
            fuel="12 lt/100 km"
            speed="2.7 sec/100km"
          />
        </div>
      </div>
    </div>
  );
};

export default SlsAmg;

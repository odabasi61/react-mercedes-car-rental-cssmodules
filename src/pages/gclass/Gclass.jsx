import Date from "../../components/date/Date";
import Info from "../../components/info/Info";
import styles from "./Gclass.module.css";
import gclass from "../../images/suv4.jpg";

const Gclass = () => {
  return (
    <div>
      <Date />
      <div className={styles.rentcard}>
        <div className={styles.image}>
          <img src={gclass} alt="amg gt 63 s" />
        </div>
        <div className={styles.info}>
          <Info
            name="G Class"
            price="$2099"
            seat="5 Seats"
            fuel="9.2 lt/100 km"
            speed="5 sec/100km"
          />
        </div>
      </div>
    </div>
  );
};

export default Gclass;

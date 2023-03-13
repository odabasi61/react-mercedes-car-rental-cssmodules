import Date from "../../components/date/Date";
import Info from "../../components/info/Info";
import styles from "./Eqs.module.css";
import eqs from "../../images/suv2.jpg";

const Eqs = () => {
  return (
    <div>
      <Date />
      <div className={styles.rentcard}>
        <div className={styles.image}>
          <img src={eqs} alt="amg gt 63 s" />
        </div>
        <div className={styles.info}>
          <Info name="EQS Suv" price="$1199" seat="7 Seats" />
        </div>
      </div>
    </div>
  );
};

export default Eqs;

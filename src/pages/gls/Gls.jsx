import Date from "../../components/date/Date";
import Info from "../../components/info/Info";
import styles from "./Gls.module.css";
import gls from "../../images/suv3.jpg";

const Gls = () => {
  return (
    <div>
      <Date />
      <div className={styles.rentcard}>
        <div className={styles.image}>
          <img src={gls} alt="amg gt 63 s" />
        </div>
        <div className={styles.info}>
          <Info name="GLS 600 Maybach" price="$2499" seat="5 Seats" />
        </div>
      </div>
    </div>
  );
};

export default Gls;

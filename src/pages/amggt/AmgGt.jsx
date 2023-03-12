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
          <Info />
        </div>
      </div>
    </div>
  );
};

export default AmgGt;
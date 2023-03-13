import styles from "./CityInfo.module.css";
import map from "../../images/map.jpg";

const CityInfo = ({ city, address, phone }) => {
  return (
    <div className={styles.container}>
      <h2>Rent A Car From Our {city} Office</h2>
      <div className={styles.contact}>
        <div className={styles.address}>
          <div>
            <span>Address:</span>
          </div>

          <div>
            <span>{address}</span>
          </div>
        </div>

        <div className={styles.phone}>
          <div>
            <span>Phone:</span>
          </div>
          <div>
            <span>{phone}</span>
          </div>
        </div>

        <div className={styles.work}>
          <div>
            <span>Working Hours:</span>
          </div>
          <div>
            <span>08:00 - 17:00</span>
          </div>
        </div>
      </div>

      <h2>Find Us On Map</h2>
      <div className={styles.image}>
        <img src={map} alt="/" />
      </div>
    </div>
  );
};

export default CityInfo;

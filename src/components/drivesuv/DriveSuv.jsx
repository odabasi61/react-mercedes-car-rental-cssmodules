import styles from "./DriveSuv.module.css";
import drivesuv from "../../images/suvdrive.png";

const DriveSuv = () => {
  return (
    <div className={styles.driver}>
      <div className={styles.left}>
        <img src={drivesuv} alt="mercedes offroaf g class" />
      </div>
      <div>
        <h2>
          The ultimate adventure machine{" "}
          <span>discover more with Mercedes SUV</span>
        </h2>
        <p>
          Embark on the ultimate adventure with our SUV! Whether you're hitting
          the open road or exploring rugged terrain, our vehicle is designed to
          take you anywhere your heart desires.
        </p>
        <button>Browse Cars</button>
      </div>
    </div>
  );
};

export default DriveSuv;

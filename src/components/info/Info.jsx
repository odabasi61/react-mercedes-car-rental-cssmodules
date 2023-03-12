import styles from "./Info.module.css";
import {
  GiCarSeat,
  GiBeachBag,
  GiHandBag,
  GiGearStickPattern,
} from "react-icons/gi";
import { BsFillFuelPumpFill, BsMap, BsPinMap } from "react-icons/bs";
import { MdPolicy, MdOutlineAttachEmail } from "react-icons/md";

const Info = ({ name }) => {
  return (
    <div className={styles.container}>
      <p>{name}</p>
      <div className={styles.specs}>
        <div>
          <div>
            <GiCarSeat />
            <span> 5 Seats</span>
          </div>
          <div>
            <GiBeachBag />
            <span> 1 Small Bag</span>
          </div>
          <div>
            <GiHandBag />
            <span> 1 Hand Bag</span>
          </div>
        </div>

        <div>
          <div>
            <BsFillFuelPumpFill />
            <span> Petrol</span>
          </div>
          <div>
            <BsMap />
            <span> 1000 km/day</span>
          </div>
          <div>
            <GiGearStickPattern />
            <span> Automatic</span>
          </div>
        </div>
      </div>
      <div className={styles.tag}>
        <span>Speed</span>
        <span>Comfort</span>
        <span>Elegance</span>
        <span>Safety</span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".5rem",
            backgroundColor: "lightgreen",
            padding: ".5rem 1rem",
            borderRadius: "2rem",
          }}
        >
          <MdPolicy />
          <button>Policy</button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".5rem",
            backgroundColor: "lightgreen",
            padding: ".5rem 1rem",
            borderRadius: "2rem",
          }}
        >
          <BsPinMap />
          <button>Map</button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".5rem",
            backgroundColor: "lightgreen",
            padding: ".5rem 1rem",
            borderRadius: "2rem",
          }}
        >
          <MdOutlineAttachEmail />
          <button>Mail Us</button>
        </div>
      </div>
    </div>
  );
};

export default Info;

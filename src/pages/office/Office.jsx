import Card from "./Card";
import styles from "./Office.module.css";
import zurich from "../../images/zurich.jpg";
import paris from "../../images/paris.jpg";
import berlin from "../../images/berlin.jpg";
import sofia from "../../images/sofia.jpg";
import { GiAirplaneDeparture } from "react-icons/gi";
import { HiInformationCircle } from "react-icons/hi";
import { FaCity } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Office = () => {
  return (
    <div className={styles.container}>
      <h2>Our Offices Across Europe</h2>
      <section>
        <Link to={"berlin"}>
          <Card
            img={berlin}
            city="Berlin"
            icon={<FaCity />}
            info={<HiInformationCircle />}
          />
        </Link>
        <Link to={"paris"}>
          <Card
            img={paris}
            city="Paris"
            icon={<FaCity />}
            info={<HiInformationCircle />}
          />
        </Link>
        <Link to={"sofia"}>
          <Card
            img={sofia}
            city="Sofia"
            icon={<GiAirplaneDeparture />}
            info={<HiInformationCircle />}
          />
        </Link>
        <Link to={"zurich"}>
          <Card
            img={zurich}
            city="Zurich"
            icon={<GiAirplaneDeparture />}
            info={<HiInformationCircle />}
          />
        </Link>
      </section>
    </div>
  );
};

export default Office;

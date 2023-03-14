import Card from "./Card";
import styles from "./Office.module.css";
import zurich from "../../images/zurich.jpg";
import paris from "../../images/paris.jpg";
import berlin from "../../images/berlin.jpg";
import sofia from "../../images/sofia.jpg";
import madrid from "../../images/madrid.jpg";
import istanbul from "../../images/istanbul.jpg";
import vienna from "../../images/vienna.jpg";
import budapest from "../../images/budapest.jpg";
import oslo from "../../images/oslo.jpg";
import Stockholm from "../../images/stockholm.jpg";
import Amsterdam from "../../images/amsterdam.jpg";
import Rome from "../../images/rome.jpg";
import { GiAirplaneDeparture } from "react-icons/gi";
import { HiInformationCircle } from "react-icons/hi";
import { FaCity } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Office = () => {
  return (
    <div className={styles.container}>
      <h2>Our Offices Across Europe</h2>
      <section>
        <Link to={"amsterdam"}>
          <Card
            img={Amsterdam}
            city="Amsterdam"
            icon={<GiAirplaneDeparture />}
            info={<HiInformationCircle />}
          />
        </Link>
        <Link to={"berlin"}>
          <Card
            img={berlin}
            city="Berlin"
            icon={<FaCity />}
            info={<HiInformationCircle />}
          />
        </Link>
        <Link to={"budapest"}>
          <Card
            img={budapest}
            city="Budapest"
            icon={<FaCity />}
            info={<HiInformationCircle />}
          />
        </Link>
        <Link to={"istanbul"}>
          <Card
            img={istanbul}
            city="İstanbul"
            icon={<FaCity />}
            info={<HiInformationCircle />}
          />
        </Link>
        <Link to={"madrid"}>
          <Card
            img={madrid}
            city="Madrid"
            icon={<GiAirplaneDeparture />}
            info={<HiInformationCircle />}
          />
        </Link>
        <Link to={"oslo"}>
          <Card
            img={oslo}
            city="Oslo"
            icon={<GiAirplaneDeparture />}
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
        <Link to={"rome"}>
          <Card
            img={Rome}
            city="Rome"
            icon={<FaCity />}
            info={<HiInformationCircle />}
          />
        </Link>
        <Link to={"stockholm"}>
          <Card
            img={Stockholm}
            city="Stockholm"
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
        <Link to={"vienna"}>
          <Card
            img={vienna}
            city="Vienna"
            icon={<FaCity />}
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

import styles from "./LearnMore.module.css";
import customer from "../../images/customer.png";
import fleet from "../../images/fleet.png";

const LearnMore = () => {
  return (
    <div className={styles.learn}>
      <h2>About Us</h2>
      <div className={styles.about}>
        <div>
          <img src={customer} alt="customer relations" />
        </div>
        <div>
          <p>
            Welcome to our rent a car company, where we offer luxury Mercedes
            cars for rent to customers looking to experience the ultimate
            driving experience. Our company was founded with the belief that
            renting a car should be a hassle-free experience, and we strive to
            provide our customers with exceptional service and top-of-the-line
            vehicles. We take pride in our extensive selection of Mercedes cars,
            from sporty coupes to spacious SUVs, each carefully selected to
            ensure our customers enjoy their driving experience to the fullest.
            Our vehicles are regularly maintained and serviced to ensure their
            safety and reliability, and we're committed to providing our
            customers with a clean and comfortable ride every time.
          </p>
        </div>
      </div>

      <h2>Our Fleet</h2>
      <div className={styles.fleet}>
        <div>
          <p>
            Mercedes-Benz C-Class: A luxurious and sporty sedan, perfect for
            business trips or weekend getaways. Features might include leather
            seats, a sunroof, and advanced safety features like lane departure
            warning and blind spot monitoring.
          </p>
          <p>
            Mercedes-Benz E-Class: A larger sedan with even more premium
            features, such as a premium sound system, heated and ventilated
            seats, and advanced driver assistance systems. This car is ideal for
            longer road trips or special events.
          </p>
          <p>
            Mercedes-Benz S-Class: The ultimate luxury sedan, offering
            unparalleled comfort and technology. This car might include features
            like a massage function in the seats, a panoramic sunroof, and an
            advanced infotainment system.
          </p>
          <p>
            Mercedes-Benz GLE: A larger SUV with more space and amenities, such
            as a panoramic sunroof, heated and ventilated seats, and a powerful
            engine. Great for families or groups who want to travel in style and
            comfort.
          </p>
        </div>
        <div>
          <img src={fleet} alt="mercedes fleet" />
        </div>
      </div>
    </div>
  );
};

export default LearnMore;

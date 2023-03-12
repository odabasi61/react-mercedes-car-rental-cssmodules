import styles from "./Hero.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <form>
        <div className={styles.text}>
          <label htmlFor="where">Where</label>
          <input
            className={styles.text_input}
            id="where"
            type="text"
            placeholder="Search location..."
          />
        </div>
        <div className={styles.from}>
          <span className={styles.border}></span>
          <label htmlFor="from">From</label>
          <input type="date" id="from" />
        </div>
        <div className={styles.until}>
          <span className={styles.border}></span>
          <label htmlFor="until">Until</label>
          <input type="date" id="until" />
        </div>
        <div className={styles.searct_btn}>
          <AiOutlineSearch />
          <button className={styles.btn}>Search for cars</button>
        </div>
      </form>
    </div>
  );
};

export default Hero;

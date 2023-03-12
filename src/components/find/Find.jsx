// these codes are imported fron the website of swiper library
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Find.module.css";
import Card from "./Card";
import find1 from "../../images/find1.jpg";
import find2 from "../../images/find2.jpg";
import find3 from "../../images/find3.jpg";
import find4 from "../../images/find4.jpg";
import find5 from "../../images/find5.jpg";
import find6 from "../../images/find6.jpg";
import find7 from "../../images/find7.jpg";
import find8 from "../../images/find8.jpg";
import find9 from "../../images/find9.jpg";
import find10 from "../../images/find10.jpg";
import find11 from "../../images/find11.jpg";
import find12 from "../../images/find12.jpg";

const Find = () => {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>Find Your Drive</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Explore beautiful Mercedes models</span>
          </p>
        </div>
      </div>
      <div className={styles.slider_container}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          breakpoints={{
            // when window width is >= 340px
            340: {
              width: 200,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 4,
            },
            // when window width is >= 1040px
            1040: {
              width: 1040,
              slidesPerView: 5,
            },
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            {/* image and make is sent to card as props */}
            <Card image={find1} make="AMG GT63 S" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image={find2} make="EQE" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image={find3} make="GLE" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image={find4} make="S 560" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image={find5} make="Vision 6" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image={find6} make="C Class" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image={find7} make="E Class" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image={find8} make="A Class" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image={find9} make="AMG 43 S" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image={find10} make="B Class" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image={find11} make="EQS" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image={find12} make="Maybach" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Find;

import styles from "./Quote.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Card from "./Card";
import { AiOutlineUser, AiFillStar } from "react-icons/ai";

const Quote = () => {
  return (
    <div className={styles.quote}>
      <div className={styles.heading}>
        <div className={styles.text_bg}>
          <h2>Customer quotes about us</h2>
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
            <Card
              icon={<AiOutlineUser size={30} />}
              name="Olivia Peterson"
              star={<AiFillStar />}
              comment="Renting a car has never been easier thanks to this amazing car rental company!"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              icon={<AiOutlineUser size={30} />}
              name="Alexander Gupta"
              star={<AiFillStar />}
              comment="From start to finish, this car rental company provides exceptional service."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              icon={<AiOutlineUser size={30} />}
              name="Mia Brown"
              star={<AiFillStar />}
              comment="The staff at this car rental company is beyond to ensure customer satisfaction."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              icon={<AiOutlineUser size={30} />}
              name="Noah Singh"
              star={<AiFillStar />}
              comment="I always choose this rental company because of their affordable prices."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              icon={<AiOutlineUser size={30} />}
              name="Isabella Martinez"
              star={<AiFillStar />}
              comment="With this car rental company, you can explore the world on your own terms."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              icon={<AiOutlineUser size={30} />}
              name="Mason Kim"
              star={<AiFillStar />}
              comment="This car rental company provides reliable transportation for any occasion."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              icon={<AiOutlineUser size={30} />}
              name="Ava Nguyen"
              star={<AiFillStar />}
              comment="Trustworthy and efficient, this car rental company is my go-to choice every time."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              icon={<AiOutlineUser size={30} />}
              name="Ethan Lee"
              star={<AiFillStar />}
              comment="Whether you need a car for business or pleasure, this company has you covered."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              icon={<AiOutlineUser size={30} />}
              name="Sophia Rodriguez"
              star={<AiFillStar />}
              comment="The seamless process of renting from this car rental company makes traveling a breeze."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              icon={<AiOutlineUser size={30} />}
              name="Liam Patel"
              star={<AiFillStar />}
              comment="I do recommend this company to anyone looking for a good experience."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Quote;

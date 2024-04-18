"use client";
// import Slider from "react-slick";
import styles from "./SlickSlider.module.css";
import { testimonialsData } from "../../utils/data";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const SlickSlider = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   touchMove: true,
  //   useCSS: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 1000,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  const breakpoints = [
    { width: 1024, slidesToShow: 3 },
    { width: 1000, slidesToShow: 2 },
    { width: 768, slidesToShow: 1 },
  ];

  return (
    <div className={styles.slider_container}>
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        swipeable={true}
        emulateTouch={true}
        autoPlay={false} // Adjust according to your preference
        interval={5000} // Adjust according to your preference
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                style={{
                  background: "red",
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  display: "inline-block",
                  margin: "0 5px",
                  cursor: "pointer",
                }}
                aria-label={`Slide ${index}`}
                title={`Slide ${index}`}
                onClick={(e) => onClickHandler(e)}
              />
            );
          }
          return (
            <li
              style={{
                background: "blue",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                display: "inline-block",
                margin: "0 5px",
                cursor: "pointer",
              }}
              aria-label={`Slide ${index}`}
              title={`Slide ${index}`}
              onClick={(e) => onClickHandler(e)}
            />
          );
        }}
        breakpoints={breakpoints}
      >
        {testimonialsData.map((person, index) => (
          <div key={index} className={styles.comment}>
            {/* Upperside */}
            <div className={styles.c_content}>
              <Image
                src={"/apos.svg"}
                className={styles.apos_slider}
                alt="apos"
                width={40}
                height={30}
              />
              <span>{person.comment} </span>
            </div>

            {/* Lowerside */}
            <div className={styles.c_info}>
              <div className={styles.c_avatar}>{person.name}</div>
              <div className={styles.c_person}>
                <span>{person.name}</span>
                <span>{person.profession}</span>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default SlickSlider;

"use client";
import SlickSlider from "../SlickSlider/SlickSlider";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <div className={styles.t_wrapper}>
      <div className={`container ${styles.container}`}>
        <div className={styles.t_container}>
          {/* Testimonails Head */}
          <div className={styles.t_head}>
            <span className="tag">Testimonials</span>
            <span className="title">
              Access Capital That Complements Traditional Funding Options
            </span>
            <span className="des">What people say about us</span>
          </div>

          {/* Slider */}
          <SlickSlider />
        </div>
      </div>
    </div>
  );
};
export default Testimonials;

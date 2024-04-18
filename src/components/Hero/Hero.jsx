"use client";
import { HeroData } from "../../utils/data";
import EmailBox from "../Email-Box/Email-box";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";

const Hero = () => {
  const variants = (delay) => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        damping: 25,
        duration: 2.5,
        delay,
      },
    },
  });

  const imgVariants = () => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        duration: 2,
        stiffness: 30,
      },
    },
  });
  return (
    <div className={styles.hero_wrapper}>
      <div className={`container ${styles.container}`}>
        {/* Background Image */}
        <img
          src="hero/hero-arrow.png"
          alt="arrow"
          className={styles.hero_arrow}
        />
        <div className={styles.hero_container}>
          {/* Left Side */}
          <div className={styles.hero_left}>
            <div className={styles.image_row}>
              {HeroData.slice(0, 3).map((person, index) => (
                <div className={styles.person_pill} key={index}>
                  <motion.div
                    className={styles.person_pill_bg}
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{ backgroundColor: person.bg }}
                  >
                    <motion.img
                      src={person.src}
                      alt={person.src}
                      initial={"initial"}
                      animate={"animate"}
                      variants={imgVariants()}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
            <div className={styles.image_row}>
              {HeroData.slice(3, 6).map((person, index) => (
                <div className={styles.person_pill} key={index}>
                  <motion.div
                    className={styles.person_pill_bg}
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{ backgroundColor: person.bg }}
                  >
                    <motion.img
                      src={person.src}
                      alt={person.src}
                      initial={"initial"}
                      animate={"animate"}
                      variants={imgVariants()}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className={styles.hero_right}>
            <div className={styles.hero_title}>
              <span>Redifine How</span>
              <span>You Grow your</span>
              <span>Digital Bussiness</span>
            </div>
            <div className={styles.hero_des}>
              Revenue based funding and execution support designed for early
              stage founders
            </div>

            <EmailBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

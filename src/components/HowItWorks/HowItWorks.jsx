"use client";
import { hitFeatures } from "../../utils/data";
import styles from "./HowItWorks.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { tagVariants, titleVariants } from "../../utils/animations";

const HowItWorks = () => {
  const featureVariants = {
    offscreen: {
      scale: 0.5,
    },
    onscreen: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
  };
  return (
    <div className={styles.hiw_wrapper}>
      <div className="container">
        <div className={styles.hiw_container}>
          {/* Head */}
          <div className={styles.hiw_head}>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="tag"
            >
              How it works
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="title"
            >
              Unlocking Potential Along The Growth Journey
            </motion.span>
          </div>

          {/* Features */}
          <div className={styles.hiw_features}>
            {hitFeatures.map(({ icon, title, des }, index) => (
              <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={featureVariants}
                className={styles.hiw_feature}
                key={index}
              >
                {/* Left Side */}
                <motion.div
                  className={styles.detail}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: "easeIn",
                      duration: 1,
                      delay: 0.7,
                    },
                  }}
                >
                  <span className="des">0{index + 1}</span>
                  <span className="sec_title">{title}</span>
                  <span className="text">{des}</span>
                </motion.div>
                {/* Right Side */}
                <div className={styles.icon}>
                  <Image
                    src={icon}
                    width={128}
                    height={128}
                    style={{ translate: "50% 0rem" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;

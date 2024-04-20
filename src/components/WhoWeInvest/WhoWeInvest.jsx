import { whoWeInvest } from "../../utils/data";
import styles from "./WhoWeInvest.module.css";
import { motion } from "framer-motion";
import {
  containerVariants,
  tagVariants,
  titleVariants,
} from "../../utils/animations";
const WhoWeInvest = () => {
  return (
    <div className={styles.wwi_wrapper}>
      <div className={`container ${styles.container}`}>
        <div className={styles.wwi_container}>
          {/* Left Side */}
          <div className={styles.wwi_left}>
            {/* Head */}
            <div className={styles.head}>
              <motion.span
                initial="offscreen"
                // whileInView={"onscreen"}
                variants={tagVariants}
                className="tag"
              >
                Who we invest in
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className={`title ${styles.title}`}
              >
                The Global HR <br />
                Platform You Deserve
              </motion.span>
            </div>
            {/* Features */}
            <div className={styles.wwi_features}>
              {whoWeInvest.map(({ title, des }, index) => (
                <motion.div
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={containerVariants(index * 0.5 + 1)}
                  key={index}
                  className={styles.wwi_feature}
                >
                  <span className={`des ${styles.des}`}>{title}</span>
                  <span className={`text ${styles.text}`}>{des}</span>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Right Side */}
          <div className={styles.wwi_right}>
            <img
              initial="offscreen"
              whileInView={"onscreen"}
              variants={containerVariants(0.5)}
              src="persons.png"
              alt="persons"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeInvest;

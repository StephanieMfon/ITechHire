"use client";
import { ourDiffFeatures } from "../../utils/data";
import styles from "./OurDiff.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariants,
  desVariants,
  tagVariants,
  titleVariants,
} from "../../utils/animations";
const OurDiff = () => {
  return (
    <div className={styles.od_wrapper}>
      <div className="container">
        <div className={styles.od_container}>
          {/* Head Section */}
          <div className={styles.od_head}>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className={`tag ${styles.tag}`}
            >
              Our difference
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="title"
            >
              Fair Capital, Hassle Free
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className={`text ${styles.text}`}
            >
              Our mission is to level the playing field for early stage growth
              capital. <br />
              We provide capital that is unbiased, flexible and non dilutive
              with the execution support to accelerate value creation.
            </motion.span>
          </div>

          {/* Feature Section */}
          <div className={styles.od_features}>
            {ourDiffFeatures.map(({ icon, title, des }, index) => (
              <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={containerVariants(index * 1 * 0.1)}
                className={styles.od_feature}
                key={index}
              >
                <Image src={icon} alt="feature" width={128} height={128} />
                <span className="sec_title">{title}</span>
                <span className={`text ${styles.text}`}>{des}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDiff;

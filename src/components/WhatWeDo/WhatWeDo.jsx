"use client";
import { features } from "../../utils/data";
import styles from "./WhatWeDo.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariants,
  desVariants,
  tagVariants,
  titleVariants,
} from "../../utils/animations";
const WhatWeDo = () => {
  return (
    <div className={styles.wwd_wrapper}>
      <div className="container">
        <div className={styles.wwd_container}>
          {/* Section Head */}
          <div className={styles.wwd_head}>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="tag"
            >
              What we do
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="title"
            >
              Empowering Entrepreneurs with Strategic HR Support and Job
              Opportunities
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="des"
            >
              Here is how we can evaluate
            </motion.span>
          </div>

          {/* Two blocks */}
          <div className={styles.wwd_blocks}>
            {/* First block */}
            <div className={styles.wwd_block}>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className="sec_title"
              >
                Blue Advances
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className="text"
              >
                Facilitating Ongoing Career Expansion: Connecting Talent with
                Opportunities
              </motion.span>

              <div className={styles.block_features}>
                {features.slice(0, 3).map((feature, index) => (
                  <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={containerVariants(index * 1 * 0.1)}
                    className={styles.block_feature}
                    key={index}
                  >
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Second block */}
            <div className={styles.wwd_block}>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className="sec_title"
              >
                Blue Advances
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className="text"
              >
                Facilitating Ongoing Business Expansion: Connecting Company with
                Talent
              </motion.span>

              <div className={styles.block_features}>
                {features.slice(3, 6).map((feature, index) => (
                  <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={containerVariants(index * 1 * 0.1)}
                    className={styles.block_feature}
                    key={index}
                  >
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Support block */}

          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={containerVariants(0.3)}
            className={styles.wwd_support}
          >
            {/* Left side */}

            <div>
              <span className="sec_title">Blue Growth Support</span>
              <span className="des">
                Employee performance and task tracking to supercharge growth
              </span>
            </div>

            {/* Right side */}
            <div>
              <span className="text">
                Leverage our expertise across proposition design, talent
                management, analytics to boost ROI
              </span>
              <span className="text">
                Unlock the full potential of your workforce with our HR
                management platform. Gain actionable insights by connecting HR
                data with performance metrics, employee engagement, and talent
                acquisition strategies.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;

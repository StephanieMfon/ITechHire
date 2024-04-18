"use client";
import { useRef } from "react";
import styles from "./BrandingVideo.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
const BrandingVideo = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <div className={styles.bv_container}>
      <div className={`container ${styles.container}`}>
        <motion.video
          className={styles.branding_video}
          ref={ref}
          loop
          muted
          autoPlay
          controls=""
          style={{ scale }}
        >
          <source src="/video.mp4" type="video/mp4" />
        </motion.video>
      </div>
    </div>
  );
};

export default BrandingVideo;

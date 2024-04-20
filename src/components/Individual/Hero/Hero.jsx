"use client";
import styles from "./Hero.module.css";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

import { titleVariants } from "../../../utils/animations";
import { useRouter } from "next/navigation";
import { ROUTES } from "../../../utils/ROUTES";

const IndividualHero = () => {
  const router = useRouter();

  return (
    <div className={styles.hero_wrapper}>
      <div className="container">
        <div className={styles.hero_container}>
          <motion.span
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className={styles.title}
          >
            Opportunity is <br /> wherever you are
          </motion.span>
          <span className={styles.subtitle}>
            We’re connecting the best remote talent with the best remote
            companies.
          </span>

          <button
            onClick={() => router.push(ROUTES.INDIVIDUAL.ALL_JOBS)}
            className={styles.button}
          >
            <FiSearch />

            <span>Browse Jobs</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualHero;

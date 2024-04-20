import styles from "./Email-box.module.css";
import { LuMail } from "react-icons/lu";
import { motion } from "framer-motion";
import { containerVariants } from "../../utils/animations";
const EmailBox = ({ variant = "default" }) => {
  return (
    <motion.div
      initial={{ width: ".5rem", borderRadius: "100%" }}
      whileInView={{
        width: "70%",
        borderRadius: "999px",
        transition: {
          type: "easeOut",
          duration: 1,
        },
      }}
      className={`${variant === "footer" && styles.footer} ${styles.email_box}`}
    >
      {/* Icon */}
      <motion.div
        variants={containerVariants(0.6)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{ once: true }}
      >
        <LuMail size={30} color="grey" />
      </motion.div>

      {/* Input */}
      <motion.input
        variants={containerVariants(0.7)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{ once: true }}
        type="email"
        placeholder="Enter Email"
      />

      <motion.div
        variants={containerVariants(0.9)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{ once: true }}
        className={styles.get_funded}
      >
        Get Started
      </motion.div>
    </motion.div>
  );
};

export default EmailBox;

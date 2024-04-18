import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className="container">
        <div className={styles.nav_container}>
          {/* Left side */}
          <div className={styles.nav_logo}>
            <span>STEPHKEEPSCODE</span>
          </div>

          {/* Right Side */}
          <div className={styles.left_wrapper}>
            <div className={styles.left_item}>
              <img
                className={styles.left_img}
                src={"/individual/jobs.svg"}
                alt="Jobs"
              />
              <span className={styles.title}>Jobs</span>
            </div>
            <div className={styles.left_item}>
              <img
                className={styles.left_img}
                src="/individual/me.svg"
                alt="Me"
              />
              <span className={styles.title}>Me</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

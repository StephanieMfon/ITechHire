import EmailBox from "../Email-Box/Email-box";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.f_wrapper}>
      <div className={`container ${styles.container}`}>
        <div className={styles.f_container}>
          <span className="title">Get Funded Today!</span>
          <EmailBox variant="footer" />
          <hr />
          <div className={styles.f_menu}>
            <span>Home</span>
            <span>What we do</span>
            <span>How it wokrs</span>
            <span>Who we invest in </span>
            <span>Testimonials</span>
          </div>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default Footer;

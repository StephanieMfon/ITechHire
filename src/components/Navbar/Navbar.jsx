"use client";
import { useState } from "react";
import styles from "./Navbar.module.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { ROUTES } from "../../utils/ROUTES";

const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2) {
      setNavStyle(styles.sticky);
    } else {
      setNavStyle("");
    }
  });

  return (
    <div className={`${navStyle} ${styles.nav_wrapper}`}>
      {/* Desktop Version */}
      <div className="container">
        <div className={styles.nav_container}>
          <div className={styles.nav_logo}>
            <span>ITECHHIRE</span>
          </div>

          {/* Right side */}
          <div className={styles.nav_right}>
            <div className={styles.nav_menu}>
              <span>Platform</span>
              <span>Resources</span>
              <span>Country Explorer</span>
              <span>About us</span>
            </div>
            <Link href={"/onboarding/login"} className={styles.fund_button}>
              Log in
            </Link>{" "}
          </div>
        </div>
      </div>

      {/* Mobile/tab version */}
      <div className={styles.nav_mobile_container}>
        {/* Logo */}
        <span>ITECHHIRE</span>

        {/* Menu Icon */}

        {!mobileMenuOpened ? (
          <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        )}

        {/* Mobile menu */}
        <div
          className={styles.nav_mobile_menu}
          style={{ transform: mobileMenuOpened && "translateX(0%)" }}
        >
          <span>What we do</span>
          <span>How it works</span>
          <span>Who we invest</span>
          <span>Testimonials</span>
          <Link
            href={"/onboarding/login"}
            className={styles.mobile_fund_button}
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

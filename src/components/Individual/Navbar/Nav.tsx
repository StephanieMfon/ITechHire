"use client";
import { useState } from "react";
import styles from "./Nav.module.css";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { ROUTES } from "../../../utils/ROUTES";

export default function Nav() {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  return (
    <div className={styles.nav}>
      <div className="container">
        <div className={styles.nav_container}>
          {/* Left side */}
          <div className={styles.nav_logo}>
            <span>ITECHHIRE</span>
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
        <div className={styles.nav_mobile_container}>
          {/* Left side */}
          <div className={styles.nav_logo}>
            <span>ITECHHIRE</span>
          </div>

          {/* Right Side */}
          <div className={styles.left_wrapper}>
            <div className={styles.left_item}>
              <img
                className={styles.left_img}
                src="/individual/me.svg"
                alt="Me"
              />
            </div>

            <div className={styles.left_item}>
              {!mobileMenuOpened ? (
                <RxHamburgerMenu onClick={() => setMobileMenuOpened(true)} />
              ) : (
                <RxCross2 onClick={() => setMobileMenuOpened(false)} />
              )}
            </div>

            <div
              className={styles.nav_mobile_menu}
              style={{ transform: mobileMenuOpened && "translateX(0%)" }}
            >
              <Link
                href={ROUTES.INDIVIDUAL.ALL_JOBS}
                className={styles.nav_item}
              >
                <img
                  className={styles.left_img}
                  src={"/individual/jobs.svg"}
                  alt="Jobs"
                />
                <span className={styles.title}>Jobs</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

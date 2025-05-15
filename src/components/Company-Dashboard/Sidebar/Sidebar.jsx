"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Sidebar.module.css";
// import { SIDE_NAVIGATION_MENTEES } from "@/utilities/data";
import { ROUTES } from "../../../utils/ROUTES";
import { SIDE_NAVIGATION_ITEMS } from "../../../utils/data";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { IoMdLogOut } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { signOut } from "next-auth/react";

const Sidebar = ({ children }) => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  const handleLogout = async () => {
    // Clear localStorage token first
    localStorage.removeItem("access_token");

    await signOut({ callbackUrl: ROUTES.LOGIN });
  };

  const router = useRouter();
  const active_page = useSelectedLayoutSegment();
  console.log(active_page);

  return (
    <div className={`${styles.navigation}`}>
      {/* Mobile left sidebar */}
      <div
        className={`${styles.mobile_sidebar} 

        `}
      >
        <IoIosArrowDropright
          className={styles.arrow_icon}
          onClick={() => setOpen(true)}
        />
        <div className={styles.top}>
          <img src="/logo.png" className={styles.logo} alt="LOGO" />

          <div className={styles.left_item}>
            {!mobileMenuOpened ? (
              <RxHamburgerMenu
                styles={{ width: "60px" }}
                onClick={() => setMobileMenuOpened(true)}
              />
            ) : (
              <RxCross2 onClick={() => setMobileMenuOpened(false)} />
            )}
          </div>
        </div>

        <div
          className={styles.nav_items}
          style={{ transform: mobileMenuOpened && "translateX(0%)" }}
        >
          {SIDE_NAVIGATION_ITEMS.map(
            ({ name, route, activePage, icon }, index) => {
              return (
                <Link
                  key={index}
                  className={`${styles.menu_item}  ${
                    active_page === activePage && styles.active_page
                  }`}
                  href={route}
                >
                  <span>{icon}</span>
                  <p>{name}</p>
                </Link>
              );
            }
          )}

          <div className={`${styles.menu_item}`} onClick={() => handleLogout()}>
            <span>
              <IoMdLogOut />
            </span>
            <p>Logout</p>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}

      <div className={styles.left_sidebar}>
        <IoIosArrowDropright
          onClick={() => setOpen(false)}
          className={styles.arrow_open_icon}
        />

        <div className={styles.top}>
          <img src="/logo.png" className={styles.logo} alt="LOGO" />
          <span className={styles.title}>ITECHHIRE</span>
        </div>
        {SIDE_NAVIGATION_ITEMS.map(
          ({ name, route, activePage, icon }, index) => {
            return (
              <Link
                key={index}
                className={`${styles.menu_item}  ${
                  active_page === activePage && styles.active_page
                }`}
                href={route}
              >
                {/* <img className={styles.menu_image} src={icon} alt={name} /> */}
                <p>{name}</p>
                <span>{icon}</span>
              </Link>
            );
          }
        )}

        <div className={`${styles.menu_item}`} onClick={() => handleLogout()}>
          <p>Logout</p>
          <span>
            <IoMdLogOut />
          </span>
        </div>
      </div>

      <main className={styles.main_content}>
        <div>{children}</div>
      </main>
    </div>
  );
};
export default Sidebar;

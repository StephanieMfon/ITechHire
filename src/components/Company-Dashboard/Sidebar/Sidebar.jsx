"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Sidebar.module.css";
// import { SIDE_NAVIGATION_MENTEES } from "@/utilities/data";
import ROUTES from "../../../utils/ROUTES";
import { SIDE_NAVIGATION_ITEMS } from "../../../utils/data";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { IoMdLogOut } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(true);
  // const [userData, setUserData] = useState();

  // useEffect(() => {
  //   const userInfo = JSON.parse(localStorage.getItem("userData") || "null");
  //   setUserData(userInfo);
  // }, []);

  function logout() {
    localStorage.removeItem("userData");
    router.push(ROUTES.LOGIN);
  }

  const router = useRouter();
  const active_page = useSelectedLayoutSegment();
  console.log(active_page);

  return (
    <div className={`${styles.navigation} ${open && styles.open_left_sidebar}`}>
      {/* <header className={styles.header_1}></header> */}
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

        <div className={`${styles.menu_item}`} onClick={() => logout()}>
          <p>Logout</p>
          <span>
            <IoMdLogOut />
          </span>
        </div>
      </div>
      {/* Mobile left sidebar */}
      <div
        className={`${styles.mobile_sidebar} ${
          !open && styles.mobile_left_sidebar
        }`}
      >
        <IoIosArrowDropright
          className={styles.arrow_icon}
          onClick={() => setOpen(true)}
        />
        <div className={styles.top}>
          <img src="/logo.png" className={styles.logo} alt="LOGO" />
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
                <span>{icon}</span>
                <p>{name}</p>
              </Link>
            );
          }
        )}

        <div className={`${styles.menu_item}`} onClick={() => logout()}>
          <span>
            <IoMdLogOut />
          </span>
          <p>Logout</p>
        </div>
      </div>

      <main className={styles.main_content}>
        <div>{children}</div>
      </main>
    </div>
  );
};
export default Sidebar;

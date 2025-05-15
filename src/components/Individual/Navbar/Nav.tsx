"use client";
import { useState } from "react";
import styles from "./Nav.module.css";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { ROUTES } from "../../../utils/ROUTES";
import { Dropdown, Menu } from "antd";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export default function Nav() {
  const router = useRouter();

  const handleLogout = async () => {
    // Clear localStorage token first
    localStorage.removeItem("access_token");

    await signOut({ callbackUrl: ROUTES.LOGIN });
  };
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <div
          onClick={() => router.push(ROUTES.INDIVIDUAL.SETTINGS)}
          className={styles.drop_item}
        >
          <IoSettingsOutline />
          Account Settings
        </div>
      </Menu.Item>
      <div className={styles.line}></div>
      <Menu.Item key="2" className={styles.drop_item}>
        <div onClick={() => handleLogout()} className={styles.drop_item}>
          <IoLogOutOutline />
          Logout
        </div>
      </Menu.Item>
    </Menu>
  );
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
            <Link
              href={ROUTES.INDIVIDUAL.ALL_JOBS}
              className={styles.left_item}
            >
              <img
                className={styles.left_img}
                src={"/individual/jobs.svg"}
                alt="Jobs"
              />
              <span className={styles.title}>Jobs</span>
            </Link>
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              className={styles.dropdown}
            >
              <a onClick={(e) => e.preventDefault()}>
                <div className={styles.left_item}>
                  <img
                    className={styles.left_img}
                    src="/individual/me.svg"
                    alt="Me"
                  />

                  <span className={styles.title}>Me</span>
                </div>
              </a>
            </Dropdown>
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
              <Dropdown
                overlay={menu}
                trigger={["click"]}
                className={styles.dropdown}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <div className={styles.left_item}>
                    <img
                      className={styles.left_img}
                      src="/individual/me.svg"
                      alt="Me"
                    />

                    {/* <span className={styles.title}>Me</span> */}
                  </div>
                </a>
              </Dropdown>
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

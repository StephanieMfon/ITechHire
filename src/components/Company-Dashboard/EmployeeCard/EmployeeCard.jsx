"use client";
// import Skeleton from "react-loading-skeleton";
import styles from "./EmployeeCard.module.css";
import { IoMailUnreadSharp } from "react-icons/io5";
// import "react-loading-skeleton/dist/skeleton.css";
import React from "react";
import { Skeleton } from "antd";
import Link from "next/link";

const EmployeeCard = ({ employees }) => {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <>
      {!employees ? (
        <div className={styles.fragment_section}>
          <Skeleton size={"large"} active />
          <Skeleton size={"large"} active />
          <Skeleton size={"large"} active />
        </div>
      ) : (
        <div className={styles.employees}>
          {employees?.map(({ _id, name, team, email }, index) => {
            return (
              <div className={`${styles.employee_card}`} key={index}>
                <div className={styles.top}>
                  <div className={styles.card_icon}>
                    <span
                      className={styles.icon}
                      style={{ backgroundColor: getRandomColor() }}
                    >
                      {name[0]}
                    </span>
                  </div>
                  <span className={styles.name}>{name}</span>
                </div>

                <div className={styles.email_wrapper}>
                  <IoMailUnreadSharp />
                  <Link href={`mailto:${email}`}>
                    <p className={styles.email}>{email}</p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default EmployeeCard;

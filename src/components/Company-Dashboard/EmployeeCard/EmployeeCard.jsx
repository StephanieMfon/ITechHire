"use client";
import styles from "./EmployeeCard.module.css";
import { IoMailUnreadSharp } from "react-icons/io5";

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
    <div className={styles.employees}>
      {employees?.map(({ _id, name, team, email }, index) => {
        return (
          <div
            // direction="row"
            className={`${styles.employee_card}`}
            key={index}
          >
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
              <p className={styles.email}>{email}</p>
            </div>
            {/* </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default EmployeeCard;

"use client";
import styles from "./ProgressCard.module.css";

const ProgressCards = ({ summary }) => {
  return (
    <div className={styles.summary}>
      {summary?.map(({ _id, count, icon, background }, index) => {
        return (
          <div
            // direction="row"
            className={`${styles.summary_card} `}
            key={index}
          >
            <div className={styles.wrapper}>
              <div className={styles.card_icon}>
                <span
                  className={styles.icon}
                  style={{ backgroundImage: background }}
                >
                  {icon}
                </span>
              </div>
              <div direction="row" className={styles.data}>
                <h2 className={styles.total}>{count}</h2>

                <div>
                  <p className={styles.percentage}>+10% from last week</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressCards;

"use client";
import styles from "./JobList.module.css";
import { FaRegStar } from "react-icons/fa";
import { TbSmartHome } from "react-icons/tb";
import { LuMapPin } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import Link from "next/link";

const JobList = ({ data, limit = 0, title = "" }) => {
  if (limit > 1)
    return (
      <div className={styles.j_wrapper}>
        <div className={`container ${styles.j_container}`}>
          {title.length > 1 && (
            <div className={styles.title_section}>
              <span className={styles.title}>{title}</span>{" "}
              <Link href="#">See all jobs →</Link>
            </div>
          )}
          <div className={styles.j_items_container}>
            {data.splice(0, limit).map((item, index) => (
              <div className={styles.j_item} key={index}>
                {/* Top Section */}
                <div className={styles.j_top}>
                  <div>
                    <span className={styles.time}>{item.time}</span>
                    <span className={styles.j_top_place}>
                      {item.type} - {item.location}
                    </span>
                  </div>

                  <FaRegStar className={styles.star_icon} />
                </div>
                {/* Bottom Section */}
                <div className={styles.j_bottom}>
                  {/* Left Section */}
                  <div className={styles.j_bottom_left}>
                    <img src={item.companyPicture} alt={item.companyName} />
                    <div>
                      <span className={styles.job_title}>{item.jobTitle}</span>
                      <span className={styles.companyName}>
                        {item.companyName}
                      </span>
                    </div>
                  </div>
                  {/* Right Section */}
                  <div className={styles.right_section}>
                    <span className={styles.amount}>
                      {item.amount} USD/year
                    </span>
                    <span className={styles.details}>
                      <TbSmartHome />
                      <span>{item.type} </span>

                      <LuMapPin />
                      <span>{item.location}</span>
                      <IoMdTime />
                      <span>{item.commitment}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className={styles.j_wrapper}>
        <div className={`container ${styles.j_container}`}>
          <div className={styles.j_items_container}>
            {data.map((item, index) => (
              <div className={styles.j_item} key={index}>
                {/* Top Section */}
                <div className={styles.j_top}>
                  <div>
                    <span className={styles.time}>{item.time}</span>
                    <span className={styles.j_top_place}>
                      {item.type} - {item.location}
                    </span>
                  </div>

                  <FaRegStar className={styles.star_icon} />
                </div>
                {/* Bottom Section */}
                <div className={styles.j_bottom}>
                  {/* Left Section */}
                  <div className={styles.j_bottom_left}>
                    <img src={item.companyPicture} alt={item.companyName} />
                    <div>
                      <span className={styles.job_title}>{item.jobTitle}</span>
                      <span className={styles.companyName}>
                        {item.companyName}
                      </span>
                    </div>
                  </div>
                  {/* Right Section */}
                  <div className={styles.right_section}>
                    <span className={styles.amount}>
                      {item.amount} USD/year
                    </span>
                    <span className={styles.details}>
                      <TbSmartHome />
                      <span>{item.type} </span>

                      <LuMapPin />
                      <span>{item.location}</span>
                      <IoMdTime />
                      <span>{item.commitment}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default JobList;

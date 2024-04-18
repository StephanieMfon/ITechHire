"use client";

import styles from "./SingleJob.module.css";
import Nav from "../../../components/Individual/Navbar/Nav";
import { dummyData } from "../../../utils/data";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";
import { TbSmartHome } from "react-icons/tb";
import { LuMapPin } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
export default function SingleJob(id) {
  const single_item = dummyData.filter((data) => data.id === 5);

  return (
    <div className={styles.sj_wrapper}>
      <Nav />
      <div className="container">
        <div className={styles.sj_container}>
          {single_item.map((item) => (
            <div key={item.id}>
              {/* Top Section */}
              <div className={styles.top_wrapper}>
                <div className={styles.top}>
                  <img src={item.companyPicture} alt={item.companyName} />

                  <div className={styles.top_right}>
                    <FaRegStar className={styles.star_icon} />
                    <Link className={styles.apply_button} href={item.href}>
                      Apply
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}

              <div className={styles.bottom_section}>
                {/* Left */}
                <div className={styles.bottom_left}>
                  <div className={styles.head}>
                    <span className={styles.job_title}>{item.jobTitle}</span>
                    <span className={styles.company}>{item.companyName}</span>
                  </div>

                  <span className={styles.description_title}>Description</span>

                  <span className={styles.description}>{item.details}</span>
                </div>

                {/* Right */}
                <div className={styles.bottom_right}>
                  {/* Right top */}
                  <div className={styles.bottom_right_top}>
                    <span className={styles.amount}>{item.amount}/year</span>
                    <span className={styles.details}>
                      <TbSmartHome />
                      <span>{item.type} </span>

                      <LuMapPin />
                      <span>{item.location}</span>
                      <IoMdTime />
                      <span>{item.commitment}</span>
                    </span>
                  </div>

                  {/* Right bottom */}
                  <div className={styles.bottom_right_bottom}>
                    <span className={styles.bottom_title}>{item.jobTitle}</span>
                    <span className={styles.j_top_place}>
                      {item.type} - {item.location}
                    </span>

                    <div className={styles.listing}>
                      <div className={styles.listing_block}>
                        <span className={styles.subtitle}>Workplace</span>
                        <div className={styles.listing_item}>
                          <TbSmartHome />
                          <span>{item.type} </span>
                        </div>
                      </div>

                      <div className={styles.listing_block}>
                        <span className={styles.subtitle}>Location</span>
                        <div className={styles.listing_item}>
                          <LuMapPin />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      <div className={styles.listing_block}>
                        <span className={styles.subtitle}>Job type</span>

                        <div className={styles.listing_item}>
                          <IoMdTime />
                          <span>{item.commitment}</span>
                        </div>
                      </div>

                      <div className={styles.listing_block}>
                        <span className={styles.subtitle}>Pay</span>
                        <span className={styles.listing_span}>
                          {item.amount}/year
                        </span>
                      </div>

                      <div className={styles.listing_block}>
                        <span className={styles.subtitle}>Published on</span>
                        <span className={styles.listing_span}>{item.time}</span>
                      </div>
                    </div>

                    <Link
                      className={`${styles.apply_button} ${styles.apply_bottom_button}`}
                      href={item.href}
                    >
                      Apply
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

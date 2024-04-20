"use client";
import styles from "./JobList.module.css";
import { FaRegStar } from "react-icons/fa";
import { TbSmartHome } from "react-icons/tb";
import { LuMapPin } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import Link from "next/link";
import { ROUTES } from "../../../utils/ROUTES";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React from "react";

const JobList = ({ data, limit = 0, title = "" }) => {
  if (limit > 1)
    return (
      <div className={styles.j_wrapper}>
        {!data ? (
          <div className={`container ${styles.j_container}`}>
            {[...Array(3)].map((_, index) => (
              <React.Fragment key={index}>
                <Skeleton count={8} />
                {index < 2 && <div className={styles.itemSeparator} />}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div className={`container ${styles.j_container}`}>
            {data && title.length > 1 && (
              <div className={styles.title_section}>
                <span className={styles.title}>{title}</span>{" "}
                <Link href="#">See all jobs →</Link>
              </div>
            )}
            <div className={styles.j_items_container}>
              {data?.splice(0, limit).map((item, index) => (
                <Link
                  href={`${ROUTES.INDIVIDUAL.ALL_JOBS}/${item.id}`}
                  className={styles.j_item}
                  key={index}
                >
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
                      <img
                        className={styles.company_picture}
                        src={item.companyPicture}
                        alt={item.companyName}
                      />
                      <div>
                        <span className={styles.job_title}>
                          {item.jobTitle}
                        </span>
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
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  else
    return (
      <div className={styles.j_wrapper}>
        {!data ? (
          <div className={`container ${styles.j_container}`}>
            {[...Array(10)].map((_, index) => (
              <React.Fragment key={index}>
                <Skeleton count={8} />

                {index < 10 && <div className={styles.itemSeparator} />}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div className={`container ${styles.j_container}`}>
            <div className={styles.j_items_container}>
              {data.map((item, index) => (
                <Link
                  href={`${ROUTES.INDIVIDUAL.ALL_JOBS}/${item.id}`}
                  className={styles.j_item}
                  key={index}
                >
                  {/* Top Section */}
                  <div className={styles.j_top}>
                    <div>
                      <span className={styles.time}>
                        {item.time || <Skeleton />}
                      </span>
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
                      <img
                        className={styles.company_picture}
                        src={item.companyPicture}
                        alt={item.companyName}
                      />
                      <div>
                        <span className={styles.job_title}>
                          {item.jobTitle}
                        </span>
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
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
};

export default JobList;

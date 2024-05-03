"use client";

import styles from "./SingleJob.module.css";
import Nav from "../../../components/Individual/Navbar/Nav";

import { FaRegStar } from "react-icons/fa";
import Link from "next/link";
import { TbSmartHome } from "react-icons/tb";
import { LuMapPin } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import VacancyRepository from "../../../repositories/VacancyRepository";
import { useEffect, useState } from "react";
import { Skeleton } from "antd";
export default function SingleJob(id) {
  console.log(id);
  // const single_vacancy = dummyData.filter((data) => data.id === Number(id.id));
  const [vacancy, setVacancy] = useState();

  const getVacancy = async () => {
    const data = await VacancyRepository.get_one(id.id);
    // console.log(data);
    setVacancy(data.data);
  };

  useEffect(() => {
    getVacancy();
  }, []);
  return (
    <div className={styles.sj_wrapper}>
      <Nav />
      <div className="container">
        <div className={styles.sj_container}>
          {!vacancy && (
            <div>
              <Skeleton size={"large"} active />
              <Skeleton size={"large"} active />
              <Skeleton size={"large"} active />
              <Skeleton size={"large"} active />
              <Skeleton size={"large"} active />
            </div>
          )}
          {vacancy && (
            <>
              <div>
                {/* Top Section */}
                <div className={styles.top_wrapper}>
                  <div className={styles.top}>
                    <img
                      src={vacancy.companyPicture}
                      alt={vacancy.companyName}
                    />

                    <div className={styles.top_right}>
                      <FaRegStar
                        className={styles.star_icon}
                        style={{ color: "#808080" }}
                      />
                      <Link className={styles.apply_button} href={vacancy.link}>
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
                      <span className={styles.job_title}>
                        {vacancy.jobTitle}
                      </span>
                      <span className={styles.company}>
                        {vacancy.companyName}
                      </span>
                    </div>

                    <span className={styles.description_title}>
                      Description
                    </span>

                    <span className={styles.description}>
                      {vacancy.details}
                    </span>
                  </div>

                  {/* Right */}
                  <div className={styles.bottom_right}>
                    {/* Right top */}
                    <div className={styles.bottom_right_top}>
                      <span className={styles.amount}>
                        {vacancy.amount}/year
                      </span>
                      <span className={styles.details}>
                        <TbSmartHome />
                        <span>{vacancy.type} </span>

                        <LuMapPin />
                        <span>{vacancy.location}</span>
                        <IoMdTime />
                        <span>{vacancy.commitment}</span>
                      </span>
                    </div>

                    {/* Right bottom */}
                    <div className={styles.bottom_right_bottom}>
                      <span className={styles.bottom_title}>
                        {vacancy.jobTitle}
                      </span>
                      <span className={styles.j_top_place}>
                        {vacancy.type} - {vacancy.location}
                      </span>

                      <div className={styles.listing}>
                        <div className={styles.listing_block}>
                          <span className={styles.subtitle}>Workplace</span>
                          <div className={styles.listing_item}>
                            <TbSmartHome />
                            <span>{vacancy.type} </span>
                          </div>
                        </div>

                        <div className={styles.listing_block}>
                          <span className={styles.subtitle}>Location</span>
                          <div className={styles.listing_vacancy}>
                            <LuMapPin />
                            <span>{vacancy.location}</span>
                          </div>
                        </div>

                        <div className={styles.listing_block}>
                          <span className={styles.subtitle}>Job type</span>

                          <div className={styles.listing_item}>
                            <IoMdTime />
                            <span>{vacancy.mode}</span>
                          </div>
                        </div>

                        <div className={styles.listing_block}>
                          <span className={styles.subtitle}>Pay</span>
                          <span className={styles.listing_span}>
                            {vacancy.amount}/year
                          </span>
                        </div>

                        <div className={styles.listing_block}>
                          <span className={styles.subtitle}>Published on</span>
                          <span className={styles.listing_span}>
                            {/* {vacancy.time} */}
                          </span>
                        </div>
                      </div>

                      <Link
                        className={`${styles.apply_button} ${styles.apply_bottom_button}`}
                        href={vacancy.link}
                      >
                        Apply
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

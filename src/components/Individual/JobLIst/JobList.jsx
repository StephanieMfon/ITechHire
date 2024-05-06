"use client";
import styles from "./JobList.module.css";
import { FaRegStar } from "react-icons/fa";
import { TbSmartHome } from "react-icons/tb";
import { LuMapPin } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import Link from "next/link";
import { ROUTES } from "../../../utils/ROUTES";

import React from "react";
import { getDate } from "../../../utils/dateConfig";
import { Skeleton } from "antd";
import { FaStar } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import VacancyRepository from "../../../repositories/VacancyRepository";

const JobList = ({ data, saved, limit = 0, title = "", setSavedVacancies }) => {
  const router = useRouter();
  const isVacancySaved = (vacancyId) => {
    return saved?.some((savedVacancy) => savedVacancy._id === vacancyId);
  };

  const saveVacancy = async (id) => {
    await VacancyRepository.save_vacancy(id);
    const response = await VacancyRepository.get_saved_vacancies();
    setSavedVacancies(response.data);
  };

  const unsaveVacancy = async (id) => {
    const response = await VacancyRepository.unsave_vacancy(id);
    setSavedVacancies(response.data);
  };

  if (limit > 1)
    return (
      <div className={styles.j_wrapper}>
        {data.length === 0 ? (
          <div className={"container"}>
            <Skeleton size={"large"} active />
            <Skeleton size={"large"} active />
            <Skeleton size={"large"} active />
          </div>
        ) : (
          <div className={`container ${styles.j_container}`}>
            {data && title.length > 1 && (
              <div className={styles.title_section}>
                <span className={styles.title}>{title}</span>{" "}
                <Link href={ROUTES.INDIVIDUAL.ALL_JOBS}>See all jobs →</Link>
              </div>
            )}
            <div className={styles.j_items_container}>
              {data?.splice(0, limit).map((item, index) => (
                <div
                  // href={}
                  className={styles.j_item}
                  key={index}
                >
                  {/* Top Section */}
                  <div className={styles.j_top}>
                    <div>
                      <span className={styles.time}>
                        {getDate(item.time.$date).day || <Skeleton />}
                      </span>
                      <span className={styles.j_top_place}>
                        {item.jobType} - {item.location}
                      </span>
                    </div>

                    <div>
                      {isVacancySaved(item._id) && (
                        <FaStar
                          onClick={() => unsaveVacancy(item._id)}
                          className={styles.star_icon}
                          color="orange"
                        />
                      )}

                      {!isVacancySaved(item._id) && (
                        <FaRegStar
                          onClick={() => saveVacancy(item._id)}
                          className={styles.star_icon}
                          color="grey"
                        />
                      )}
                    </div>
                  </div>
                  {/* Bottom Section */}
                  <div
                    className={styles.j_bottom}
                    onClick={() =>
                      router.push(`${ROUTES.INDIVIDUAL.ALL_JOBS}/${item._id}`)
                    }
                  >
                    {/* Left Section */}
                    <div className={styles.j_bottom_left}>
                      <img
                        className={styles.company_picture}
                        src={item.companyPicture}
                        alt={item.companyName}
                      />
                      <div>
                        <span className={styles.job_title}>{item.title}</span>
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
                        <span>{item.jobType} </span>

                        <LuMapPin />
                        <span>{item.location}</span>
                        <IoMdTime />
                        <span>{item.mode}</span>
                      </span>
                    </div>
                  </div>
                </div>
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
            {[...Array(3)].map((_, index) => (
              <React.Fragment key={index}>
                <Skeleton active />

                {index < 3 && <div className={styles.itemSeparator} />}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div className={`container ${styles.j_container}`}>
            <div className={styles.j_items_container}>
              {data.map((item, index) => (
                <div
                  // href={`${ROUTES.INDIVIDUAL.ALL_JOBS}/${item._id}`}
                  className={styles.j_item}
                  key={index}
                >
                  {/* Top Section */}
                  <div className={styles.j_top}>
                    <div>
                      <span className={styles.time}>
                        {getDate(item.time.$date).day || <Skeleton />}
                      </span>
                      <span className={styles.j_top_place}>
                        {item.jobType} - {item.location}
                      </span>
                    </div>
                    <div>
                      {isVacancySaved(item._id) && (
                        <FaStar
                          onClick={() => unsaveVacancy(item._id)}
                          className={styles.star_icon}
                          color="orange"
                        />
                      )}

                      {!isVacancySaved(item._id) && (
                        <FaRegStar
                          onClick={() => saveVacancy(item._id)}
                          className={styles.star_icon}
                          color="grey"
                        />
                      )}
                    </div>
                  </div>
                  {/* Bottom Section */}
                  <div
                    className={styles.j_bottom}
                    onClick={() =>
                      router.push(`${ROUTES.INDIVIDUAL.ALL_JOBS}/${item._id}`)
                    }
                  >
                    {/* Left Section */}
                    <div className={styles.j_bottom_left}>
                      <img
                        className={styles.company_picture}
                        src={item.companyPicture}
                        alt={item.companyName}
                      />
                      <div>
                        <span className={styles.job_title}>{item.title}</span>
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
                        <span>{item.jobType} </span>

                        <LuMapPin />
                        <span>{item.location}</span>
                        <IoMdTime />
                        <span>{item.mode}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
};

export default JobList;

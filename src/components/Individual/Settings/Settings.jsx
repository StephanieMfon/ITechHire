"use client";

import styles from "./Settings.module.css";
import Nav from "../Navbar/Nav";
import { dummyData } from "../../../utils/data";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";
import { TbSmartHome } from "react-icons/tb";
import { LuMapPin } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import VacancyRepository from "../../../repositories/VacancyRepository";
import { useEffect, useState } from "react";
import { Skeleton } from "antd";

export default function Settings(id) {
  const [vacancy, setVacancy] = useState();

  const getVacancy = async () => {
    const data = await VacancyRepository.get_one(id.id);
    setVacancy(data.data);
  };

  useEffect(() => {
    getVacancy();
  }, []);
  return (
    <div className={styles.sj_wrapper}>
      <Nav />
      <div className={`container`}>
        <div className={styles.sj_container}>
          <div className={styles.block}>hello</div>
          <div className={styles.block}>hello</div>
        </div>
      </div>
    </div>
  );
}

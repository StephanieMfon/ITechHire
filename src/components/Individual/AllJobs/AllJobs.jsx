"use client";
import JobList from "../JobLIst/JobList";
import styles from "./AllJobs.module.css";
import { FiSearch } from "react-icons/fi";
import { dummyData } from "../../../utils/data";
import Nav from "../Navbar/Nav";
import { useEffect, useState } from "react";
import VacancyRepository from "../../../repositories/VacancyRepository";

const AllJobs = () => {
  const [vacancies, setVacancies] = useState(null);
  const [savedVacancies, setSavedVacancies] = useState();
  const getVacancies = async () => {
    const data = await VacancyRepository.get_total();
    const saved = await VacancyRepository.get_saved_vacancies();
    console.log(data);
    setVacancies(data.data);
    setSavedVacancies(saved.data);
  };

  const handleSearchChange = async (e) => {
    const searchTerm = e.target.value;
    const data = await VacancyRepository.get_total(searchTerm);
    console.log(data);
    setVacancies(data.data);
  };

  useEffect(() => {
    getVacancies();
  }, []);
  return (
    <div className={styles.aj_wrapper}>
      <Nav />
      <div className="container">
        <div className={styles.aj_container}>
          <div className={styles.search_box}>
            <div className={styles.form_wrapper}>
              <form>
                <input
                  type="search"
                  placeholder="Search by Job Title"
                  onChange={(e) => handleSearchChange(e)}
                />
                <button>
                  <FiSearch className={styles.icon} />
                </button>
              </form>
            </div>
          </div>
          <JobList data={vacancies} saved={savedVacancies} />
        </div>
      </div>
    </div>
  );
};
export default AllJobs;

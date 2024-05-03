"use client";
import styles from "./CompanyJobs.module.css";
import { FiSearch } from "react-icons/fi";
import { dummyData } from "../../../utils/data";
import { useEffect, useState } from "react";
import AddVacancyModal from "../../Modals/Add_vacancy";
import VacancyRepository from "../../../repositories/VacancyRepository";
import dynamic from "next/dynamic";

const JobList = dynamic(() => import("../../Individual/JobLIst/JobList"), {
  ssr: false,
});
const AllJobs = () => {
  const [vacancies, setVacancies] = useState(null);
  const [addVacancyModal, setAddVacancyModalOpen] = useState([false, false]);

  const toggleModal = (idx, target) => {
    setAddVacancyModalOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };
  const handleSearchChange = async (e) => {
    const searchTerm = e.target.value;
    const data = await VacancyRepository.get_total(searchTerm);
    console.log(data);
    setVacancies(data.data);
  };

  const getVacancies = async () => {
    const data = await VacancyRepository.get_all();
    console.log(data);
    setVacancies(data.data);
  };

  useEffect(() => {
    getVacancies();
  }, []);
  return (
    <div className={styles.aj_wrapper}>
      <div className="d_container">
        <div className={styles.aj_container}>
          <span className={styles.title}>Job Listings</span>

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

          <button
            className={styles.add_new}
            onClick={() => toggleModal(0, true)}
          >
            Add New
          </button>
          <JobList data={vacancies} />
        </div>
      </div>
      <AddVacancyModal
        isModalOpen={addVacancyModal}
        toggleModal={toggleModal}
        setVacancies={setVacancies}
      />
    </div>
  );
};
export default AllJobs;

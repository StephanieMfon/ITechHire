"use client";
import JobList from "../JobLIst/JobList";
import styles from "./AllJobs.module.css";
import { FiSearch } from "react-icons/fi";
import { dummyData } from "../../../utils/data";

const AllJobs = () => {
  // console.log(dummyData);
  return (
    <div className={styles.aj_wrapper}>
      <div className="container">
        <div className={styles.aj_container}>
          <div className={styles.search_box}>
            <div className={styles.form_wrapper}>
              <form>
                <input type="search" placeholder="Search by Job Title" />
                <button>
                  <FiSearch className={styles.icon} />
                </button>
              </form>
            </div>
          </div>
          <JobList data={dummyData} />
        </div>
      </div>
    </div>
  );
};
export default AllJobs;

"use client";
import JobList from "../JobLIst/JobList";
import styles from "./AllJobs.module.css";
import { FiSearch } from "react-icons/fi";
import { dummyData } from "../../../utils/data";
import Nav from "../Navbar/Nav";
import { useEffect, useState } from "react";

const AllJobs = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate data loading from API with 2 seconds delay
    const fetchData = () => {
      setTimeout(() => {
        // Replace this with your actual API call

        setData(dummyData);
      }, 2000); // 2000 milliseconds = 2 seconds delay
    };

    fetchData(); // Call the fetchData function when component mounts
  }, []);
  return (
    <div className={styles.aj_wrapper}>
      <Nav />
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
          <JobList data={data} />
        </div>
      </div>
    </div>
  );
};
export default AllJobs;

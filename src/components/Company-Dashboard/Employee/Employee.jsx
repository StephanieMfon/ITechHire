"use client";

import styles from "./Employee.module.css";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import AddEmployeeModal from "../../Modals/Add_employee";
import { useEffect, useState } from "react";
import EmployeeRepository from "../../../repositories/EmployeeRepository";

const Employees = ({ data }) => {
  const [employees, setEmployees] = useState();

  const [addEmployeeModalOpen, setAddEmployeeModalOpen] = useState([
    false,
    false,
  ]);
  const getEmployees = async () => {
    const data = await EmployeeRepository.get_all();
    console.log(data.data);
    setEmployees(data.data);
  };

  const toggleModal = (idx, target) => {
    setAddEmployeeModalOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div className={styles.e_wrapper}>
      <div className="d_container">
        <div className={styles.e_container}>
          <span className={styles.title}>Employees</span>
          <div className={styles.top_section}>
            <h3 className={styles.header}>Team Members</h3>

            <button
              className={styles.add_new}
              onClick={() => toggleModal(0, true)}
            >
              Add New
            </button>
          </div>
          <EmployeeCard employees={employees} />
        </div>
      </div>
      <AddEmployeeModal
        isModalOpen={addEmployeeModalOpen}
        toggleModal={toggleModal}
        setEmployees={setEmployees}
      />
    </div>
  );
};

export default Employees;

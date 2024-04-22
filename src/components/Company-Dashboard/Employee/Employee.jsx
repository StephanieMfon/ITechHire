import styles from "./Employee.module.css";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

const summaryData = [
  {
    _id: 1,
    name: "Mister T",
    team: "Project Management",
    email: "mister@mail.com",
  },
  {
    _id: 2,
    name: "Mister T",
    team: "Project Management",
    email: "mister@mail.com",
  },
  {
    _id: 3,
    name: "Mister T",
    team: "Project Management",
    email: "mister@mail.com",
  },
  {
    _id: 3,
    name: "Mister T",
    team: "Project Management",
    email: "mister@mail.com",
  },
  {
    _id: 3,
    name: "Mister T",
    team: "Project Management",
    email: "mister@mail.com",
  },
  {
    _id: 3,
    name: "Mister T",
    team: "Project Management",
    email: "mister@mail.com",
  },
  {
    _id: 3,
    name: "Mister T",
    team: "Project Management",
    email: "mister@mail.com",
  },
];

const Employee = ({ data }) => {
  return (
    <div className={styles.e_wrapper}>
      <div className="d_container">
        <div className={styles.e_container}>
          <span className={styles.title}>Employees</span>
          <div className={styles.top_section}>
            <h3 className={styles.header}>Team Members</h3>

            <button className={styles.add_new}>Add New</button>
          </div>
          <EmployeeCard employees={summaryData} />
        </div>
      </div>
    </div>
  );
};

export default Employee;

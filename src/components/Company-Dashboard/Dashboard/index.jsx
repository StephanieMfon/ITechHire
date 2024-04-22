import ProgressCards from "../ProgressCard/ProgressCard";
import styles from "./Dashboard.module.css";
import { MdPeopleAlt } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import ProjectsTable from "../Table/Table";
import { tableData } from "../../../utils/data";
export const summaryData = [
  {
    _id: 1,
    count: "500 Employee",
    icon: <MdPeopleAlt />,
    background:
      "linear-gradient(to right, #533fd7, #7c68e3, #a191ee, #c4baf7, #e8e4fe)",
  },
  {
    _id: 2,
    count: "40 day time to hire",
    icon: <FaClock />,
    background: "linear-gradient(#0096FF,#0096FF)",
  },
  {
    _id: 3,
    count: "234 Attendance",
    icon: <FaPeopleGroup />,
    background:
      "linear-gradient(to top, #03c04a, #41cd6a, #64d988, #83e5a4, #a1f0bf)",
  },
];

const Dashboard = () => {
  return (
    <div className={styles.d_wrapper}>
      <div className="d_container">
        <div className={styles.dash_container}>
          <span className={styles.title}>Dashboard</span>
          <div className={styles.top}>
            <ProgressCards summary={summaryData} />
          </div>
          <div className={styles.bottom}>
            <ProjectsTable projectsData={tableData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

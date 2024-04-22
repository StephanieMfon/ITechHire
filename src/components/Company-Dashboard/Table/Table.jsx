import React from "react";
import styles from "./Table.module.css";
// import { downloadProjectsCSV } from "@/repositories/ProjectsRepository";
import { dateFormatter } from "../../../utils/dateConfig";
// import { statusFormatter } from "@/utilities/routes";

const ProjectsTable = ({ projectsData }) => {
  return (
    <div className={styles.container}>
      <div className={styles.performance_section}>
        <h3 className={styles.header}>Projects Performance Table</h3>

        <button className={styles.download_button}>Add New</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Title</th>
            <th>Level of Completion</th>
            <th>Cost</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {projectsData?.map(
            (
              { title, cost, status, levelOfCompletion, startDate, endDate },
              id
            ) => {
              return (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{title}</td>

                  <td>{levelOfCompletion}</td>
                  <td>{cost}</td>
                  <td>{dateFormatter(startDate)}</td>
                  <td>{dateFormatter(endDate)}</td>
                  <td>
                    <button
                      className={`${styles.button} ${
                        status === "completed" && styles.completed_status
                      } ${status === "in-progress" && styles.pending_status}`}
                    >
                      {/* {statusFormatter(status)} */}
                      {status}
                    </button>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;

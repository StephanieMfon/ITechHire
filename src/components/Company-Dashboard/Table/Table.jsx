"use client";

import React, { useState, useEffect } from "react";
import styles from "./Table.module.css";
import { getDate } from "../../../utils/dateConfig";
import AddTaskModal from "../../Modals/Add_task";
import { Col, InputNumber, Row, Slider } from "antd";
import TaskRepository from "../../../repositories/TaskRepository";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// import { statusFormatter } from "@/utilities/routes";

const TaskTable = ({ tasksData, setTasksData }) => {
  const [progressValues, setProgressValues] = useState(
    tasksData?.map((task) => task.progress)
  );
  console.log(progressValues);
  // Function to handle slider change
  const handleSliderChange = async (newValue, index, id) => {
    // Update the progress value in the state
    const newProgressValues = [...progressValues];
    newProgressValues[index] = newValue;
    setProgressValues(newProgressValues);
    const data = await TaskRepository.update(newValue, id);
    console.log(data.status);
    if (data.status === 200) {
      const updatedData = await TaskRepository.get_all();
      setTasksData(updatedData.data);
    }
  };

  const [addTaskModalOpen, setAddTaskModalOpen] = useState([false, false]);
  const toggleModal = (idx, target) => {
    setAddTaskModalOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };
  // Update progressValues when tasksData changes
  useEffect(() => {
    if (tasksData) {
      setProgressValues(tasksData.map((task) => task.progress));
    }
  }, [tasksData]);
  return (
    <div className={styles.container}>
      {tasksData ? (
        <>
          <div className={styles.performance_section}>
            <h3 className={styles.header}>Task Tracker</h3>
            <button
              className={styles.add_new}
              onClick={() => toggleModal(0, true)}
            >
              Add New
            </button>{" "}
          </div>
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Eployee</th>
                <th>Task name</th>
                <th>Level of completion</th>
                <th>Status</th>
                <th>Date created</th>
              </tr>
            </thead>
            <tbody>
              {tasksData?.map(
                (
                  { _id, employeeName, project, progress, status, created_at },
                  id
                ) => {
                  const day = getDate(created_at.$date);

                  return (
                    <tr key={id}>
                      <td>{id + 1}</td>
                      <td>{employeeName}</td>

                      <td>{project}</td>
                      <td>
                        <Row>
                          <Col span={18}>
                            <Slider
                              min={1}
                              max={100}
                              value={progressValues[id]} // Use progress value from state
                              onChange={(value) =>
                                handleSliderChange(value, id, _id)
                              } // Pass index of the task
                              step={5}
                            />
                          </Col>
                          <Col span={1}>
                            <InputNumber
                              disabled
                              min={1}
                              max={20}
                              style={{ width: "50px", margin: "0 0 0 6px" }}
                              value={progressValues[id]} // Use progress value from state
                            />
                          </Col>
                        </Row>

                        {/* {progress} */}
                      </td>
                      {/* <td>{cost}</td> */}

                      {/* <td>{dateFormatter(endDate)}</td> */}

                      <td>
                        <button
                          className={`${styles.button} ${
                            status === "completed" && styles.completed_status
                          } ${
                            status === "in-progress" && styles.pending_status
                          }`}
                        >
                          {status}
                        </button>
                      </td>
                      <td>{day.day}</td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
          <AddTaskModal
            isModalOpen={addTaskModalOpen}
            toggleModal={toggleModal}
            setTasksData={setTasksData}
          />
        </>
      ) : (
        <div className={styles.fragement_section}>
          {/* {[...Array(10)].map((_, index) => (
            <React.Fragment key={index}>
              <Skeleton count={8} />

              {index < 9 && <div className={styles.itemSeparator} />}
            </React.Fragment>
          ))} */}
          <Skeleton count={30} />
        </div>
      )}
    </div>
  );
};

export default TaskTable;

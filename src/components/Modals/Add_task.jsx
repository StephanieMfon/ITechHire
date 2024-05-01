"use client";
import React, { useState, useEffect, useCallback } from "react";
import { InputNumber, Modal } from "antd";
import { createStyles } from "antd-style";
import { Form, Input } from "antd";
import formStyles from "./Modal.module.css";
import { Col, DatePicker, Row, Select, Slider } from "antd";

import openNotification from "../Shared/Notification";
import EmployeeRepository from "../../repositories/EmployeeRepository";
import TaskRepository from "../../repositories/TaskRepository";

const useStyle = createStyles(({ token }) => ({
  "my-modal-mask": {
    boxShadow: `inset 0 0 15px #fff`,
  },

  "my-modal-footer": {
    color: token.colorPrimary,
  },
}));

const AddTaskModal = ({ isModalOpen, toggleModal, setTasksData }) => {
  const [employees, setEmployees] = useState([]);
  const [inputValue, setInputValue] = useState(0);

  const getEmployees = async () => {
    const data = await EmployeeRepository.get_all();
    console.log(data);
    setEmployees(data.data);
  };

  const onChange = useCallback(
    (newValue) => {
      setInputValue(newValue);
    },
    [inputValue]
  );

  const [form] = Form.useForm();

  const { styles } = useStyle();

  const [loading, setLoading] = useState(false);

  const classNames = {
    mask: styles["my-modal-mask"],
    footer: styles["my-modal-footer"],
  };

  const modalStyles = {
    mask: {
      backdropFilter: "blur(10px)",
      background: "rgba(255, 255, 255, 0.2)",
    },
  };

  const handleFinish = async (data) => {
    data.progress = inputValue;
    data.status = "in-progress";

    console.log(data);
    setLoading(true);
    const response = await TaskRepository.create(data);
    console.log(response);

    if (response.status === 200) {
      const updatedList = await TaskRepository.get_all();
      setTasksData(updatedList.data);
      setLoading(false);
      openNotification({
        type: "success",
        message: "New task added!",
      });
      form.resetFields();
      toggleModal(0, false);
    } else {
      setLoading(false);
      openNotification({
        type: "error",
        message: "Error with adding task!",
      });
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  console.log(employees);
  return (
    <>
      <Modal
        title={<h3 className={formStyles.header}>Add Task</h3>}
        open={isModalOpen[0]}
        onOk={() => toggleModal(0, false)}
        onCancel={() => toggleModal(0, false)}
        classNames={classNames}
        styles={modalStyles}
        footer=""
      >
        <Form form={form} onFinish={handleFinish} className={formStyles.inputs}>
          <div className={formStyles.input_items}>
            <h3 className={formStyles.text}>Select Employee</h3>
            <Form.Item
              name="employee"
              rules={[
                {
                  required: true,
                  message: "Please select Project plan",
                },
              ]}
            >
              <Select>
                {employees?.map((employee) => (
                  <Option key={employee._id} value={employee._id}>
                    {employee.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <h3 className={formStyles.text}>Task Title</h3>
            <Form.Item
              name="project"
              rules={[
                {
                  required: true,
                  message: "Please enter task title",
                },
              ]}
            >
              <Input
                placeholder="Enter task title"
                className={formStyles.select_input}
              />
            </Form.Item>

            <h3 className={formStyles.text}>
              Completion level ({inputValue} %)
            </h3>

            <Form.Item name="progress">
              <Row>
                <Col span={18}>
                  <Slider
                    min={1}
                    max={100}
                    onChange={onChange}
                    value={typeof inputValue === "number" ? inputValue : 0}
                    step={5}
                  />
                </Col>

                <Col span={4}>
                  <InputNumber
                    min={1}
                    max={20}
                    style={{ margin: "0 16px", color: "#000000" }}
                    value={inputValue}
                    onChange={onChange}
                  />
                </Col>
              </Row>
            </Form.Item>
          </div>

          <div className={formStyles.button_wrapper}>
            {!loading && (
              <button className={formStyles.button_primary} type="submit">
                PROCEED
              </button>
            )}
            {loading && (
              <img
                className={formStyles.loading_image}
                src="/loading.svg"
                alt="Loading"
              />
            )}
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default AddTaskModal;

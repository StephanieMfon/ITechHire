"use client";
import React, { useState } from "react";
import { InputNumber, Modal } from "antd";
import { createStyles } from "antd-style";
import { Form, Input } from "antd";
import formStyles from "./Modal.module.css";
import VacancyRepository from "../../repositories/VacancyRepository";
import { Select } from "antd";
const { Option } = Select;
import openNotification from "../Shared/Notification";
const { TextArea } = Input;

const useStyle = createStyles(({ token }) => ({
  "my-modal-mask": {
    boxShadow: `inset 0 0 15px #fff`,
  },

  "my-modal-footer": {
    color: token.colorPrimary,
  },
}));

const AddVacancyModal = ({ isModalOpen, toggleModal, setVacancies }) => {
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
    data.amount = String(data.amount);
    console.log(data);
    setLoading(true);
    const response = await VacancyRepository.create(data);
    console.log(response);

    if (response.status === 201) {
      const updatedVacancies = await VacancyRepository.get_all();
      setVacancies(updatedVacancies.data);
      setLoading(false);
      openNotification({
        type: "success",
        message: "Job listing created successfully!",
      });
      form.resetFields();
      toggleModal(0, false);
    } else {
      setLoading(false);
      openNotification({
        type: "error",
        message: "Error with creating listing, fill fields correctly!",
      });
    }
  };

  return (
    <>
      <Modal
        title={<h3 className={formStyles.header}>Add Vacancy</h3>}
        open={isModalOpen[0]}
        onOk={() => toggleModal(0, false)}
        onCancel={() => toggleModal(0, false)}
        classNames={classNames}
        styles={modalStyles}
        footer=""
      >
        <Form form={form} onFinish={handleFinish} className={formStyles.inputs}>
          <div className={formStyles.input_items}>
            <h3 className={formStyles.text}>Location</h3>
            <Form.Item
              name="location"
              rules={[
                {
                  required: true,
                  message: "Please enter location",
                },
              ]}
            >
              <Input
                placeholder="Enter country"
                className={formStyles.select_input}
              />
            </Form.Item>

            <h3 className={formStyles.text}>Job mode</h3>
            <Form.Item
              name="mode"
              rules={[
                {
                  required: true,
                  message: "Please select job mode",
                },
              ]}
            >
              <Select>
                <Option value={"remote"}>Remote</Option>
                <Option value={"hybrid"}>Hybrid</Option>
                <Option value={"onsite"}>Onsite</Option>
              </Select>
            </Form.Item>

            <h3 className={formStyles.text}>Job type</h3>
            <Form.Item
              name="jobType"
              rules={[
                {
                  required: true,
                  message: "Please select job type",
                },
              ]}
            >
              <Select>
                <Option value={"full-time"}>Full Time</Option>
                <Option value={"part-time"}>Part Time</Option>
                <Option value={"contract"}>Contract</Option>
                <Option value={"freelance"}>Freelace</Option>
                <Option value={"internship"}>Internship</Option>
              </Select>
            </Form.Item>

            <h3 className={formStyles.text}>Salary</h3>
            <Form.Item
              name="amount"
              rules={[
                {
                  required: true,
                  message: "Please enter amount in USD",
                },
              ]}
            >
              <InputNumber
                placeholder="Enter monthly salary in USD"
                className={formStyles.select_input}
              />
            </Form.Item>

            <h3 className={formStyles.text}>Link</h3>
            <Form.Item
              name="link"
              rules={[
                {
                  required: true,
                  message: "Please enter link to job form or page",
                },
              ]}
            >
              <Input
                placeholder="Enter link to job form or page"
                className={formStyles.select_input}
              />
            </Form.Item>

            <h3 className={formStyles.text}>Job Title</h3>
            <Form.Item
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please enter job title",
                },
              ]}
            >
              <Input
                placeholder="Enter job title"
                className={formStyles.select_input}
              />
            </Form.Item>

            <h3 className={formStyles.text}>Description</h3>
            <Form.Item
              name="details"
              rules={[
                {
                  required: true,
                  message: "Please enter job description",
                },
              ]}
            >
              <TextArea rows={4} placeholder="Enter detailed job description" />
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

export default AddVacancyModal;

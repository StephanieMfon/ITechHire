"use client";
import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { createStyles } from "antd-style";
import { Form, Input } from "antd";
import formStyles from "./Modal.module.css";
import EmployeeRepository from "../../repositories/EmployeeRepository";
import openNotification from "../Shared/Notification";
import AuthRepository from "../../repositories/AuthRepository";

const useStyle = createStyles(({ token }) => ({
  "my-modal-mask": {
    boxShadow: `inset 0 0 15px #fff`,
  },

  "my-modal-footer": {
    color: token.colorPrimary,
  },
}));

const ChangeEmailModal = ({ isModalOpen, toggleModal, setEmail }) => {
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
    setLoading(true);
    const response = await AuthRepository.update_email(data);
    console.log(response);

    if (response.status === 200) {
      localStorage.setItem("email", response.data.email);
      setEmail(response.data.email);
      setLoading(false);
      openNotification({
        type: "success",
        message: "Email updated successfully!",
      });
      form.resetFields();
      toggleModal(0, false);
    }
  };

  return (
    <>
      <Modal
        title={<h3 className={formStyles.header}>Change Email</h3>}
        open={isModalOpen[0]}
        onOk={() => toggleModal(0, false)}
        onCancel={() => toggleModal(0, false)}
        classNames={classNames}
        styles={modalStyles}
        footer=""
      >
        <Form form={form} onFinish={handleFinish} className={formStyles.inputs}>
          <div className={formStyles.input_items}>
            <h3 className={formStyles.text}>New Email</h3>
            <Form.Item
              name="new_email"
              rules={[
                {
                  required: true,
                  message: "Please enter new email",
                },
              ]}
            >
              <Input
                placeholder="Enter new email"
                className={formStyles.select_input}
              />
            </Form.Item>

            <h3 className={formStyles.text}>Password</h3>
            <Form.Item
              name="password"
              rules={[
                {
                  type: "password",
                  required: true,
                  message: "Please enter password",
                },
              ]}
            >
              <Input
                placeholder="Enter your password"
                className={formStyles.select_input}
              />
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

export default ChangeEmailModal;

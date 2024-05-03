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

const ChangePasswordModal = ({ isModalOpen, toggleModal }) => {
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
    const response = await AuthRepository.update_password(data);
    console.log(response);

    if (response.status === 200) {
      setLoading(false);
      openNotification({
        type: "success",
        message: "Password updated successfully!",
      });
      form.resetFields();
      toggleModal(0, false);
    }
  };

  return (
    <>
      <Modal
        title={<h3 className={formStyles.header}>Change Password</h3>}
        open={isModalOpen[0]}
        onOk={() => toggleModal(0, false)}
        onCancel={() => toggleModal(0, false)}
        classNames={classNames}
        styles={modalStyles}
        footer=""
      >
        <Form form={form} onFinish={handleFinish} className={formStyles.inputs}>
          <div className={formStyles.input_items}>
            <h3 className={formStyles.text}>Old Password</h3>
            <Form.Item
              name="old_password"
              rules={[
                {
                  required: true,
                  message: "Please enter old password",
                },
              ]}
            >
              <Input
                placeholder="Enter old password"
                className={formStyles.select_input}
              />
            </Form.Item>

            <h3 className={formStyles.text}>New Password</h3>
            <Form.Item
              name="new_password"
              rules={[
                {
                  type: "new_password",
                  required: true,
                  message: "Please enter new password",
                },
              ]}
            >
              <Input
                placeholder="Enter your new password"
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

export default ChangePasswordModal;

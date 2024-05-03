"use client";

import styles from "./Settings.module.css";
import Nav from "../Navbar/Nav";

import VacancyRepository from "../../../repositories/VacancyRepository";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { Switch } from "antd";

import dynamic from "next/dynamic";

const ChangePasswordModal = dynamic(
  () => import("../../Modals/Change_password_modal"),
  {
    ssr: false,
  }
);
const ChangeEmailModal = dynamic(
  () => import("../../Modals/Change_email_modal"),
  {
    ssr: false,
  }
);
export default function Settings(id) {
  const [vacancy, setVacancy] = useState();
  const [email, setEmail] = useState();
  const [changePasswordModalOpen, setChangePasswordModalOpen] = useState([
    false,
    false,
  ]);
  const [changeEmailModalOpen, setChangeEmailmodalOpen] = useState([
    false,
    false,
  ]);
  const getVacancy = async () => {
    const data = await VacancyRepository.get_one(id.id);
    setVacancy(data.data);
  };
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const toggleEmailModal = (idx, target) => {
    setChangeEmailmodalOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };
  const togglePasswordModal = (idx, target) => {
    setChangePasswordModalOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };

  useEffect(() => {
    getVacancy();
    setEmail(localStorage.getItem("email"));
  }, []);
  console.log(email);
  return (
    <div className={styles.sj_wrapper}>
      <Nav />
      <div className={`container ${styles.container}`}>
        <span className={styles.title}>Account settings</span>
        {/* Right Section */}
        <div className={styles.sj_container}>
          <div className={`${styles.block} ${styles.top_block}`}>
            <div className={styles.top}>
              <div className={styles.icon_wrapper}>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  fill="rgb(54, 185, 250)"
                  width="24"
                  class="sc-54216e24-2 hPfEeA"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.88 1.88A3 3 0 0 1 6 1h8a1 1 0 0 1 .7.3l6 6a1 1 0 0 1 .3.7v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4a3 3 0 0 1 .88-2.12ZM6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.41L13.59 3H6Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 1a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 13a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 17a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 9a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"
                  ></path>
                </svg>
              </div>

              <span className={styles.top_title}>Account details</span>
            </div>

            <div className={styles.bottom}>
              <div className={styles.bottom_inner}>
                <span className={styles.subtitle}>Email</span>
                <span className={styles.detail}>{email}</span>

                <div
                  className={styles.bottom_box}
                  onClick={() => toggleEmailModal(0, true)}
                >
                  <CiEdit />
                  <span>Edit</span>
                </div>
              </div>
              <div className={styles.bottom_inner}>
                <span className={styles.subtitle}>Password</span>
                <span className={styles.detail}>*******</span>
                <div
                  className={styles.bottom_box}
                  onClick={() => togglePasswordModal(0, true)}
                >
                  <CiEdit />
                  <span>Edit</span>
                </div>
              </div>
            </div>
          </div>

          {/* Left Section */}
          <div className={`${styles.block} ${styles.bottom_block}`}>
            <div className={styles.top}>Notifications</div>

            <div className={styles.bottom}>
              <div className={styles.inner_block}>
                <span className={styles.top_title}>Get notifications</span>

                <span className={styles.detail}>Recieve updates by email</span>
              </div>

              <Switch defaultChecked onChange={onChange} />
            </div>
          </div>
        </div>
      </div>
      <ChangeEmailModal
        isModalOpen={changeEmailModalOpen}
        toggleModal={toggleEmailModal}
        setEmail={setEmail}
      />
      <ChangePasswordModal
        isModalOpen={changePasswordModalOpen}
        toggleModal={togglePasswordModal}
      />
    </div>
  );
}

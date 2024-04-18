"use client";

import { Controller, SubmitHandler, useForm } from "react-hook-form";

import styles from "./Hero.module.css";
import { motion } from "framer-motion";

import { ROUTES } from "../../../utils/ROUTES";
import { Input } from "../../FormComponent/input";
import { Error } from "../../FormComponent/error";
import Link from "next/link";
import { signUpCompanyData, signUpIndividualData } from "../../../utils/data";
import { useState } from "react";

const SignUp = () => {
  const [scene, setScene] = useState("signInIndividual");
  const imgVariants = () => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        duration: 2,
        stiffness: 30,
      },
    },
  });
  return (
    <div className={styles.hero_container}>
      {/* Left Side */}
      <div className={styles.hero_left}>
        <div className={styles.image_row}>
          <div className={styles.person_pill}>
            <motion.div
              className={styles.person_pill_bg}
              // style={{ backgroundColor: "#83cfdf" }}
            >
              <motion.img
                src={"/auth/cost_calculator_manage_team.png"}
                alt={"Person"}
                initial={"initial"}
                animate={"animate"}
                variants={imgVariants()}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className={styles.hero_right}>
        <span className={styles.title}>
          How would you like to use STEPHKEEPSCODE
        </span>
        <div className={styles.scene_buttons}>
          <button
            className={`${styles.scene_button} ${
              scene === "signInIndividual" ? styles.active_scene : ""
            }`}
            onClick={() => setScene("signInIndividual")}
          >
            Sign In
          </button>

          <button
            className={`${styles.scene_button} ${
              scene === "signInCompany" ? styles.active_scene : ""
            }`}
            onClick={() => setScene("signInCompany")}
          >
            Create Account
          </button>
        </div>

        {scene === "signInIndividual" ? (
          <div className={styles.tab_wrapper}>
            {signUpCompanyData.map((company, index) => (
              <Link
                href={ROUTES.COMPANY_SIGNIN}
                key={index}
                className={styles.section_wrap}
              >
                <div className={styles.tab_left}>
                  <span className={styles.tab_title}>{company.title}</span>

                  <div className={styles.list_wrapper}>
                    {company.points.map((point, index) => (
                      <div className={styles.point_wrapper} key={index}>
                        <img
                          src="/auth/tick.svg"
                          className={styles.tick}
                          alt="Tick"
                        />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <img
                  src={company.img}
                  alt={company.title}
                  className={styles.company_img}
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className={styles.tab_wrapper}>
            {signUpIndividualData.map((individual, index) => (
              <Link
                href={"/onboarding/sign-up-individual"}
                key={index}
                className={styles.section_wrap}
              >
                <div className={styles.tab_left}>
                  <span className={styles.tab_title}>{individual.title}</span>

                  <div className={styles.list_wrapper}>
                    {individual.points.map((point, index) => (
                      <div className={styles.point_wrapper} key={index}>
                        <img
                          src="/auth/tick.svg"
                          className={styles.tick}
                          alt="Tick"
                        />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <img
                  src={individual.img}
                  alt={individual.title}
                  className={styles.company_img}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;

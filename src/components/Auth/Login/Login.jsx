"use client";

import { Controller, SubmitHandler, useForm } from "react-hook-form";

import styles from "./Hero.module.css";
import { motion } from "framer-motion";

import { ROUTES } from "../../../utils/ROUTES";
import { Input } from "../../FormComponent/input";

import Link from "next/link";

const Login = ({ handleSubmit, onSubmit, control, errors }) => {
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
      {/* Right side */}
      <div className={styles.hero_right}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h1 className={`title ${styles.header}`} data-cy="signup-page-1-text">
            Welcome back
          </h1>
          <div className={styles.inputs}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              // rules={{ required: "Email is required" }}
              render={({ field }) => {
                return (
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    error={errors.email?.message}
                    field={field}
                  ></Input>
                );
              }}
            />

            <Controller
              name="password"
              control={control}
              defaultValue=""
              // rules={{ required: "Password is required" }}
              render={({ field }) => {
                return (
                  <Input
                    id="password"
                    placeholder="Password"
                    error={errors.password?.message}
                    field={{
                      ...field,
                      onChange: (e) => {
                        field.onChange(e);

                        setFormData({
                          ...formData,
                          password: e.target.value,
                        });
                      },
                    }}
                    type="password"
                  ></Input>
                );
              }}
            />
          </div>
          <p className={styles.text}>
            Not yet registered?&nbsp;
            <Link
              href={ROUTES.SIGN_UP}
              className={styles.green_text}
              data-cy="login-link"
            >
              Sign up
            </Link>{" "}
          </p>

          <button className={"button"} type="submit">
            Submit
          </button>
        </form>
      </div>

      {/* Left Side */}
      <div className={styles.hero_left}>
        <div className={styles.image_row}>
          <div className={styles.person_pill}>
            <motion.div
              className={styles.person_pill_bg}
              style={{ backgroundColor: "#00c9f7" }}
            >
              <motion.img
                src={"/hero/person3.jpg"}
                alt={"Person"}
                initial={"initial"}
                animate={"animate"}
                variants={imgVariants()}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

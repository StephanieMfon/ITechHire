"use client";
import { useRouter } from "next/navigation";
import { Controller } from "react-hook-form";

import styles from "./SignUpIndividual.module.css";
import { motion } from "framer-motion";
import { ROUTES } from "../../../utils/ROUTES";
import { Input } from "../../FormComponent/input";
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import GoogleLoginButton from "../../Buttons/GoogleLoginButton";

const SignUpIndividual = ({
  handleSubmit,
  onSubmit,
  control,
  errors,
  loading,
}) => {
  const router = useRouter();
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

  const { data: session } = useSession();
  console.log(session);

  if (session && session.user) {
    if (session.user.email) {
      localStorage.setItem("email", session.user.email);
    }

    if (session.authToken) {
      localStorage.setItem("access_token", session.authToken);
    }

    router.push(ROUTES.INDIVIDUAL.MAIN);
  }

  return (
    <div className={styles.hero_container}>
      {/* Left Side */}
      <div className={styles.hero_left}>
        <div className={styles.image_row}>
          <div className={styles.person_pill}>
            <motion.div
              className={styles.person_pill_bg}
              style={{ backgroundColor: "#83cfdf" }}
            >
              <motion.img
                src={"/hero/person4.jpg"}
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
        <div className={styles.form}>
          <h1 className={`title ${styles.header}`} data-cy="signup-page-1-text">
            Create new account
          </h1>
          {!session?.user && <GoogleLoginButton />}

          <form className={styles.inputs} onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="first_name"
              control={control}
              defaultValue=""
              // rules={{ required: "Please enter your first name!" }}
              render={({ field }) => {
                return (
                  <Input
                    id="first_name"
                    placeholder="First Name"
                    error={errors.firstname?.message}
                    field={field}
                  ></Input>
                );
              }}
            />
            <Controller
              name="last_name"
              control={control}
              defaultValue=""
              rules={{ required: "Please enter your last name!" }}
              render={({ field }) => {
                return (
                  <Input
                    id="last_name"
                    placeholder="Last Name"
                    error={errors.lastname?.message}
                    field={field}
                  ></Input>
                );
              }}
            />

            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: "Email is required" }}
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
                    field={field}
                    type="password"
                  ></Input>
                );
              }}
            />

            <button
              className={`button ${styles.submit_button} ${
                loading && styles.loading_img
              }`}
              type="submit"
            >
              {!loading && <span>Submit</span>}
              {loading && (
                <img
                  src="/loading.svg"
                  className={styles.loading}
                  alt="Loading"
                />
              )}
            </button>
          </form>
          <p className={styles.text}>
            Already have an account?&nbsp;
            <Link
              href={ROUTES.LOGIN}
              className={styles.green_text}
              data-cy="login-link"
            >
              Sign in
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpIndividual;

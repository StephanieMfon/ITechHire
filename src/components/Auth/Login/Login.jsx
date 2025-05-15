"use client";

import { Controller } from "react-hook-form";

import styles from "./Login.module.css";
import { motion } from "framer-motion";

import { ROUTES } from "../../../utils/ROUTES";
import { Input } from "../../FormComponent/input";

import Link from "next/link";
import { useSession } from "next-auth/react";
import GoogleLoginButton from "../../Buttons/GoogleLoginButton";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = ({ handleSubmit, onSubmit, control, errors, loading }) => {
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
  const [scene, setScene] = useState("signInIndividual");

  const { data: session } = useSession();
  const router = useRouter();

  console.log(session);

  if (session && session.user) {
    // Store information only if we have a valid session and user

    if (session.user.email) {
      localStorage.setItem("email", session.user.email);
    }

    if (session.authToken) {
      localStorage.setItem("access_token", session.authToken);
    }

    // router.push(ROUTES.INDIVIDUAL.MAIN);
  }
  return (
    <div className={styles.hero_container}>
      {/* Right side */}
      <div className={styles.hero_right}>
        <div className={styles.form}>
          <h1 className={`title ${styles.header}`} data-cy="signup-page-1-text">
            Welcome back
          </h1>
          <div className={styles.oauth_buttons}>
            {!session?.user && <GoogleLoginButton text={"Company sign in "} />}
            {!session?.user && <GoogleLoginButton text={"Talent sign in "} />}
          </div>

          {/* scene buttons */}
          <div className={styles.scene_buttons}>
            <button
              className={`${styles.scene_button} ${
                scene === "signInCompany" ? styles.active_scene : ""
              }`}
              onClick={() => setScene("signInCompany")}
            >
              Company
            </button>

            <button
              className={`${styles.scene_button} ${
                scene === "signInIndividual" ? styles.active_scene : ""
              }`}
              onClick={() => setScene("signInIndividual")}
            >
              Talent
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {scene === "signInIndividual" ? (
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
                        field={field}
                        type="password"
                      ></Input>
                    );
                  }}
                />
              </div>
            ) : (
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
                        placeholder="Company Email"
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
              </div>
            )}

            {/* <div className="button_wrap"> */}
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
            {/* </div> */}
          </form>
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
        </div>
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

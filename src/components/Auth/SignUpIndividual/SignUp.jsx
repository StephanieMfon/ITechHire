"use client";
import { useRouter } from "next/navigation";
import { Controller } from "react-hook-form";

import styles from "./SignUpIndividual.module.css";
import { motion } from "framer-motion";
import { ROUTES } from "../../../utils/ROUTES";
import { Input } from "../../FormComponent/input";
import { Error } from "../../FormComponent/error";
import Link from "next/link";

const SignUpIndividual = ({ handleSubmit, onSubmit, control, errors }) => {
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
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h1 className={`title ${styles.header}`} data-cy="signup-page-1-text">
            Create new account
          </h1>
          <div className={styles.inputs}>
            <Controller
              name="firstname"
              control={control}
              defaultValue=""
              // rules={{ required: "Please enter your first name!" }}
              render={({ field }) => {
                return (
                  <Input
                    id="firstname"
                    placeholder="First Name"
                    error={errors.firstname?.message}
                    field={field}
                  ></Input>
                );
              }}
            />
            <Controller
              name="lastname"
              control={control}
              defaultValue=""
              rules={{ required: "Please enter your last name!" }}
              render={({ field }) => {
                return (
                  <Input
                    id="lastname"
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

            <Controller
              control={control}
              name="role"
              // defaultValue="option1"
              rules={{ required: "Role is required" }}
              render={({ field }) => {
                return (
                  <>
                    <select
                      id="role"
                      ref={field?.ref}
                      onChange={(e) =>
                        field?.onChange({ target: { value: e.target.value } })
                      }
                      className={styles.selectInput}
                    >
                      <option value="">Role</option>
                      <option value="mentor">Mentor</option>
                      <option value="mentee">Mentee</option>
                    </select>
                    {errors.marital_status && (
                      <Error>{errors.marital_status.message}</Error>
                    )}
                  </>
                );
              }}
            />
          </div>
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

          <button
            onClick={() => router.push(ROUTES.INDIVIDUAL.MAIN)}
            className="button"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpIndividual;

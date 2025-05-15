"use client";
import { useRouter } from "next/navigation";
import { Controller } from "react-hook-form";

import styles from "./SignUpCompany.module.css";
import { motion } from "framer-motion";
import { ROUTES } from "../../../utils/ROUTES";
import { Input } from "../../FormComponent/input";
import { Error } from "../../FormComponent/error";
import Link from "next/link";
import GoogleLoginButton from "../../Buttons/GoogleLoginButton";
import { useSession } from "next-auth/react";

const SignUpCompany = ({
  handleSubmit,
  onSubmit,
  control,
  errors,
  loading,
  handleFileChange,
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

  // const [response, setResponse] = useState(null);
  const { data: session } = useSession();

  if (session && session.user) {
    console.log(session);
    localStorage.setItem("email", session.user.email);
    localStorage.setItem("access_token", session.authToken);
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
          {!session?.user && (
            <GoogleLoginButton
              userType="company"
              callbackUrl="/company-dashboard"
            />
          )}

          <form className={styles.inputs} onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              // rules={{ required: "Please enter your first name!" }}
              render={({ field }) => {
                return (
                  <Input
                    id="name"
                    placeholder="Company Name"
                    error={errors.name?.message}
                    field={field}
                  ></Input>
                );
              }}
            />

            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: "Company Email is required" }}
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
              control={control}
              name="logo"
              // rules={{ required: "Company logo is required" }}
              render={({ field: { value, onChange, ...field } }) => {
                return (
                  <div className={styles.logo_input}>
                    <label htmlFor="logo">
                      Upload your Company logo:
                      <input
                        {...field}
                        value={value?.fileName}
                        onChange={(e) => handleFileChange(e)}
                        type="file"
                        id="logo"
                      />
                      <span id="imageIndicator">{value?.name}</span>
                    </label>
                    {/* {previewImage && (
                      <img
                        src={previewImage}
                        alt="Preview"
                        className={styles.previewImage}
                      />
                    )} */}
                    {errors.logo && (
                      <Error>{errors.my_statement.message}</Error>
                    )}
                  </div>
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

export default SignUpCompany;

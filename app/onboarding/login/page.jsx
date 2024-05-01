"use client";

import { useRouter } from "next/navigation";
import { ROUTES } from "../../../src/utils/ROUTES";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Login from "../../../src/components/Auth/Login/Login";
import AuthenticationRepository from "../../../src/repositories/AuthRepository";
import openNotification from "../../../src/components/Shared/Notification";

const defaultValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: defaultValues });

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const [response, companyResponse] = await Promise.all([
        AuthenticationRepository.login(data),
        AuthenticationRepository.companyLogin(data),
      ]);

      if (response.status === 200) {
        setLoading(false);
        openNotification({
          type: "success",
          message: "Individual Login Successful!",
        });
        localStorage.setItem("access_token", response.data.access_token);
        router.push(ROUTES.INDIVIDUAL.MAIN);
        return;
      } else if (companyResponse.status === 200) {
        setLoading(false);
        openNotification({
          type: "success",
          message: "Company Login Successful!",
        });
        localStorage.setItem("access_token", companyResponse.data.access_token);
        router.push(ROUTES.COMPANY_DASHBOARD.MAIN);
      } else {
        setLoading(false);
        openNotification({
          type: "error",
          message: "User not registered",
        });
      }
    } catch (error) {
      setLoading(false);
      console.error("Error during login:", error);
      openNotification({
        type: "error",
        message: "An error occurred during login",
      });
    }
  };

  return (
    <Login
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      control={control}
      errors={errors}
      loading={loading}
    />
  );
};
export default LoginPage;

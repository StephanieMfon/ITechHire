"use client";

import { useRouter } from "next/navigation";
import { ROUTES } from "../../../src/utils/ROUTES";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Login from "../../../src/components/Auth/Login/Login";

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
    const response = await AuthenticationRepository.login(data);
    console.log(response);

    if (response.response?.status === 400) {
      openNotification({
        type: "error",
        message: "Email already exists",
      });

      setLoading(false);
    }

    if (response.status === 201) {
      openNotification({
        type: "success",
        message: "Registration Successful!",
      });

      router.push(ROUTES.LOGIN);
    }
  };
  return (
    <Login
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      control={control}
      errors={errors}
    />
  );
};
export default LoginPage;

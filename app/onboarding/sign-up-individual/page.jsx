"use client";

import { useRouter } from "next/navigation";
import { ROUTES } from "../../../src/utils/ROUTES";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SignUpIndividual from "../../../src/components/Auth/SignUpIndividual/SignUp";
import AuthenticationRepository from "../../../src/repositories/AuthRepository";
import openNotification from "../../../src/components/Shared/Notification";

const defaultValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};
const SignUpIndividualPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: defaultValues });

  const onSubmit = async (data) => {
    setLoading(true);
    console.log(data);
    const response = await AuthenticationRepository.signup(data);
    console.log(response.status);

    if (response.response?.status === 400) {
      setLoading(false);
      openNotification({
        type: "error",
        message: "Email already exists",
      });

      setLoading(false);
    }

    if (response.status === 201) {
      setLoading(false);
      openNotification({
        type: "success",
        message: "Registration Successful!",
      });

      router.push(ROUTES.LOGIN);
    }
  };
  return (
    <SignUpIndividual
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      control={control}
      errors={errors}
      loading={loading}
    />
  );
};
export default SignUpIndividualPage;

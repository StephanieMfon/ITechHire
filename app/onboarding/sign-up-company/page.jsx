"use client";

import { useRouter } from "next/navigation";
import SignUp from "../../../src/components/Auth/SignUp/SignUp";
import { ROUTES } from "../../../src/utils/ROUTES";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SignUpCompany from "../../../src/components/Auth/SignUpCompany/SignUpCompany";

const defaultValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  role: "",
};
const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: defaultValues });

  const onSubmit = async (data) => {
    const response = await AuthenticationRepository.signup(data);
    // console.log(response);

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
    <SignUpCompany
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      control={control}
      errors={errors}
    />
  );
};
export default SignUpPage;

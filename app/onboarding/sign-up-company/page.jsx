"use client";

import { useRouter } from "next/navigation";
import { ROUTES } from "../../../src/utils/ROUTES";
import { storage } from "../../../src/utils/firebase";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SignUpCompany from "../../../src/components/Auth/SignUpCompany/SignUpCompany";
import openNotification from "../../../src/components/Shared/Notification";
import AuthenticationRepository from "../../../src/repositories/AuthRepository";

const defaultValues = {
  name: "",
  email: "",
  logo: "",
  password: "",
};
const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: defaultValues });

  const handleFileChange = async (event) => {
    setLoading(true);
    const selectedFile = event?.target?.files?.[0];
    setSelectedFile(selectedFile);
    // onChange(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      // reader.onload = () => {
      //   setPreviewImage(reader.result);
      // };
      reader.readAsDataURL(selectedFile);
    }

    const imageRef = storage.ref().child(selectedFile?.name);

    const snapshot = await imageRef.put(selectedFile);
    const downloadURL = await snapshot.ref.getDownloadURL();

    if (snapshot?._delegate?.state === "success") {
      setLoading(false);
      setSelectedFile(downloadURL);
      openNotification({
        type: "success",
        message: "Logo Updated Successful!",
      });
    } else {
      setLoading(false);
      openNotification({
        type: "error",
        message: "Error with updating logo",
      });

      // setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    data.logo = selectedFile;
    setLoading(true);
    const response = await AuthenticationRepository.companySignin(data);
    console.log(response);
    if (response.response?.status === 400) {
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
    <SignUpCompany
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      control={control}
      errors={errors}
      loading={loading}
      handleFileChange={handleFileChange}
    />
  );
};
export default SignUpPage;

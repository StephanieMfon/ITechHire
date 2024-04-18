"use client";
import axios from "axios";
const AuthInstance = axios.create();

// export enum ROLE {
//   Mentor = "mentor",
//   Mentee = "mentee",
// }

// export interface ISignUp {
//   firstname: string;
//   lastname: string;
//   email: string;
//   password: string;
//   role: ROLE;
// }

// export interface ILogin {
//   email: string;
//   password: string;
// }

// export interface IUploadImage {
//   profile_photo: string;
// }

// const userData = JSON.parse(localStorage.getItem("userData") as string) || null;
// const userData = (localStorage.getItem("userData") as string) || null;

AuthInstance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${
      JSON.parse(localStorage.getItem(String("userData"))).acccess_token
    }`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// const token = `Bearer ${localStorage.getItem("access_token")}`;
const headers = {
  "Content-Type": "application/json",
  // Authorization: token,
};

class AuthRepository {
  async signup(data) {
    console.log("DEBUG: making a POST request to /sign-up");

    try {
      const payload = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API_UR}/sign-up`,
        data,
        {
          headers,
        }
      );
      return payload;
    } catch (e) {
      return e;
    }
  }
  async login(data) {
    console.log("DEBUG: making a POST request to /login");

    try {
      const payload = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API_UR}/login`,
        data,
        {
          headers,
        }
      );
      return payload;
    } catch (e) {
      return e;
    }
  }

  async update_photo(data) {
    console.log("DEBUG: making a POST request to mentor/update");
    try {
      const payload = await AuthInstance.put(
        `${process.env.NEXT_PUBLIC_BACKEND_API_UR}/mentor/update`,
        data,
        {
          headers,
        }
      );
      return payload;
    } catch (e: any) {
      return e;
    }
  }
}

export default new AuthRepository();

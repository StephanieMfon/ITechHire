"use client";
import axios from "axios";
const TalentInstance = axios.create();

TalentInstance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] =
      `Bearer ${localStorage.getItem("access_token")}` || "";
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const headers = {
  "Content-Type": "application/json",
};

class AuthRepository {
  BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  async signup(data) {
    console.log(this.BASE_URL);
    console.log("DEBUG: making a POST request to /talent/create");

    try {
      const payload = await axios.post(`${this.BASE_URL}/talent/create`, data, {
        headers,
      });
      console.log(payload);
      return payload;
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  async login(data) {
    console.log(this.BASE_URL);
    console.log("DEBUG: making a POST request to talent/login");

    try {
      const payload = await axios.post(`${this.BASE_URL}/talent/login`, data, {
        headers,
      });
      return payload;
    } catch (e) {
      return e;
    }
  }

  async update_password(data) {
    console.log(this.BASE_URL);
    console.log("DEBUG: making a POST request to talent/update_password");

    try {
      const payload = await TalentInstance.put(
        `${this.BASE_URL}/talent/update_password`,
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
  async update_email(data) {
    console.log(this.BASE_URL);
    console.log("DEBUG: making a POST request to talent/update-email");

    try {
      const payload = await TalentInstance.put(
        `${this.BASE_URL}/talent/update-email`,
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
    console.log(this.BASE_URL);
    console.log("DEBUG: making a POST request to talent/login");

    try {
      const payload = await axios.post(`${this.BASE_URL}/talent/login`, data, {
        headers,
      });
      return payload;
    } catch (e) {
      return e;
    }
  }

  async companySignin(data) {
    console.log(this.BASE_URL);
    console.log("DEBUG: making a POST request to /company/create");

    try {
      const payload = await axios.post(
        `${this.BASE_URL}/company/create`,
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

  async companyLogin(data) {
    console.log(this.BASE_URL);
    console.log("DEBUG: making a POST request to company/login");

    try {
      const payload = await axios.post(`${this.BASE_URL}/company/login`, data, {
        headers,
      });
      return payload;
    } catch (e) {
      return e;
    }
  }
}

export default new AuthRepository();

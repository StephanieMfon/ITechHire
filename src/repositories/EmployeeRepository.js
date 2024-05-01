"use client";

import axios from "axios";

const EmployeeInstance = axios.create();

/**
 * Represents an Employee
 * @class
 */

EmployeeInstance.interceptors.request.use(
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

class EmployeeRepository {
  BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  HEADERS = { "Content-Type": "application/json" };

  async create(data) {
    console.log(this.BASE_URL);
    console.log(localStorage.getItem("access_token"));
    console.log("DEBUG: making a POST request to /employee/create");

    try {
      const payload = await EmployeeInstance.post(
        `${this.BASE_URL}/employee/create`,
        data,
        {
          headers: this.HEADERS,
        }
      );

      return payload;
    } catch (e) {
      return e;
    }
  }

  async get_all() {
    console.log(this.BASE_URL);
    console.log(localStorage.getItem("access_token"));
    console.log("DEBUG: making a GET request to /employee");

    try {
      const payload = await EmployeeInstance.get(`${this.BASE_URL}/employee`, {
        headers: this.HEADERS,
      });

      return payload;
    } catch (e) {
      return e;
    }
  }
}
export default new EmployeeRepository();

"use client";

import axios from "axios";

const VacancyInstance = axios.create();

/**
 * Represents a Vacancy
 * @class
 */

VacancyInstance.interceptors.request.use(
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

class VacancyRepository {
  BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  HEADERS = { "Content-Type": "application/json" };

  async create(data) {
    console.log("DEBUG: making a POST request to /vacancy/create");

    try {
      const payload = await VacancyInstance.post(
        `${this.BASE_URL}/vacancy/create`,
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
    console.log("DEBUG: making a GET request to /vacancy");

    try {
      const payload = await VacancyInstance.get(`${this.BASE_URL}/vacancy`, {
        headers: this.HEADERS,
      });

      return payload;
    } catch (e) {
      return e;
    }
  }

  async get_saved_vacancies() {
    console.log("DEBUG: making a GET request to /vacancy/talent/saved");

    try {
      const payload = await VacancyInstance.get(
        `${this.BASE_URL}/vacancy/talent/saved`,
        {
          headers: this.HEADERS,
        }
      );

      return payload;
    } catch (e) {
      return e;
    }
  }

  async get_total(search = "", limit = 0) {
    console.log("DEBUG: making a GET request to /vacancy");
    console.log(
      `${this.BASE_URL}/vacancy/custom?search=${search}&limit=${limit}`
    );
    try {
      const payload = await VacancyInstance.get(
        `${this.BASE_URL}/vacancy/custom?search=${search}&limit=${limit}`,
        {
          headers: this.HEADERS,
        }
      );

      return payload;
    } catch (e) {
      return e;
    }
  }

  async get_one(id) {
    console.log("DEBUG: making a GET request to /vacancy/id");

    try {
      const payload = await VacancyInstance.get(
        `${this.BASE_URL}/vacancy/${id}`,
        {
          headers: this.HEADERS,
        }
      );

      return payload;
    } catch (e) {
      return e;
    }
  }
}
export default new VacancyRepository();

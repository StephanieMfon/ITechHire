"use client";

import axios from "axios";

const TaskInstance = axios.create();

/**
 * Represents a Vacancy
 * @class
 */

TaskInstance.interceptors.request.use(
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

class TaskRepository {
  BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  HEADERS = { "Content-Type": "application/json" };

  async create(data) {
    console.log("DEBUG: making a POST request to /task/create");

    try {
      const payload = await TaskInstance.post(
        `${this.BASE_URL}/task/create/${data.employee}`,
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
    console.log("DEBUG: making a GET request to /task");

    try {
      const payload = await TaskInstance.get(`${this.BASE_URL}/task`, {
        headers: this.HEADERS,
      });

      return payload;
    } catch (e) {
      return e;
    }
  }

  async update(newValue, task_id) {
    console.log("DEBUG: making a GET request to /task/update/taskid");

    try {
      const payload = await TaskInstance.put(
        `${this.BASE_URL}/task/update/${task_id}`,
        { progress: newValue },
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
export default new TaskRepository();

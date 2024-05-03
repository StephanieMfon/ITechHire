"use client";
import Nav from "../../src/components/Individual/Navbar/Nav";
import IndividualHero from "../../src/components/Individual/Hero/Hero";
import Companies from "../../src/components/Individual/Companies/Companies";

import VacancyRepository from "../../src/repositories/VacancyRepository";
import { useEffect, useState } from "react";

import dynamic from "next/dynamic";

const JobList = dynamic(
  () => import("../../src/components/Individual/JobLIst/JobList"),
  { ssr: false }
);
const IndividualHomePage = () => {
  const [pageData, setPageData] = useState({
    newJobs: [],
    engineeringJobs: [],
    designJobs: [],
  });

  const getData = async () => {
    const data = await Promise.all([
      VacancyRepository.get_total("", 3),
      VacancyRepository.get_total("eng"),
      VacancyRepository.get_total("design"),
    ]);

    setPageData({
      newJobs: data[0].data,
      engineeringJobs: data[1].data,
      designJobs: data[2].data,
    });
    console.log(data);
  };

  console.log(pageData);
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="app">
      <Nav />
      <IndividualHero />
      <Companies />
      <JobList data={pageData.newJobs} limit={3} title="New jobs" />
      <JobList
        data={pageData.engineeringJobs}
        limit={3}
        title="Top engineering jobs"
      />
      <JobList data={pageData.designJobs} limit={3} title="Top design jobs" />
    </div>
  );
};

export default IndividualHomePage;

"use client";
import Nav from "../../src/components/Individual/Navbar/Nav";
import IndividualHero from "../../src/components/Individual/Hero/Hero";
import Companies from "../../src/components/Individual/Companies/Companies";
import JobList from "../../src/components/Individual/JobLIst/JobList";
import { dummyData } from "../../src/utils/data";
const IndividualHomePage = () => {
  return (
    <div className="app">
      <Nav />
      <IndividualHero />
      <Companies />
      <JobList data={dummyData} limit={3} title="New jobs" />
      <JobList data={dummyData} limit={3} title="Top engineering jobs" />
      <JobList data={dummyData} limit={3} title="Top design jobs" />
    </div>
  );
};

export default IndividualHomePage;

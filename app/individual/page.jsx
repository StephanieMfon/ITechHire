"use client";
import Nav from "../../src/components/Individual/Navbar/Nav";
import IndividualHero from "../../src/components/Individual/Hero/Hero";
import Companies from "../../src/components/Individual/Companies/Companies";
import JobList from "../../src/components/Individual/JobLIst/JobList";
import { dummyData } from "../../src/utils/data";
import { useEffect, useState } from "react";
const IndividualHomePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    // Simulate data loading from API with 2 seconds delay
    const fetchData = () => {
      setTimeout(() => {
        // Replace this with your actual API call

        setData(dummyData);
        setLoading(false); // Set loading state to false after data is fetched
      }, 2000); // 2000 milliseconds = 2 seconds delay
    };

    fetchData(); // Call the fetchData function when component mounts
  }, []);
  console.log(data);
  return (
    <div className="app">
      <Nav />
      <IndividualHero />
      <Companies />
      <JobList data={data} limit={3} title="New jobs" />
      <JobList data={data} limit={3} title="Top engineering jobs" />
      <JobList data={data} limit={3} title="Top design jobs" />
    </div>
  );
};

export default IndividualHomePage;

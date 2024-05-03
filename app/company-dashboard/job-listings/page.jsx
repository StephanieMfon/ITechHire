import dynamic from "next/dynamic";

const AllJobs = dynamic(
  () => import("../../../src/components/Company-Dashboard/AllJobs/CompanyJobs"),
  { ssr: false }
);
const JobListingPage = () => {
  return <AllJobs />;
};
export default JobListingPage;

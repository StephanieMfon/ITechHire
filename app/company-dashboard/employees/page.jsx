import dynamic from "next/dynamic";

const Employees = dynamic(
  () => import("../../../src/components/Company-Dashboard/Employee/Employee"),
  { ssr: false }
);
const JobListingPage = () => {
  return <Employees />;
};
export default JobListingPage;

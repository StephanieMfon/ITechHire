import dynamic from "next/dynamic";

const AllJobs = dynamic(
  () => import("../../../src/components/Individual/AllJobs/AllJobs"),
  { ssr: false }
);
const AllJobsPage = () => <AllJobs />;
export default AllJobsPage;

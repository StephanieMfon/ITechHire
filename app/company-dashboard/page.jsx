import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('../../src/components/Company-Dashboard/Dashboard'), { ssr: false });

// import Dashboard from "";
const CompanyDashboardPage = () => {
  return <Dashboard />;
};
export default CompanyDashboardPage;

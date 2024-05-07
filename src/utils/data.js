import { RiHome5Line } from "react-icons/ri";
import { MdOutlinePlaylistAddCircle } from "react-icons/md";
import { IoPeopleCircle } from "react-icons/io5";

export const HeroData = [
  {
    src: "hero/person1.jpg",
    bg: "#0be4d1",
    delay: 0.1,
  },
  {
    src: "hero/person2.jpg",
    bg: "#fde490",
    delay: 0.3,
  },
  {
    src: "hero/person3.jpg",
    bg: "#00c9f7",
    delay: 0.2,
  },
  {
    src: "hero/person4.jpg",
    bg: "#83cfdf",
    delay: 0.2,
  },
  {
    src: "hero/person5.jpg",
    bg: "#fe8856",
    delay: 0.3,
  },
  {
    src: "hero/person6.jpg",
    bg: "#0be4d1",
    delay: 0.25,
  },
];

export const features = [
  {
    icon: "/features/Frame-0.png",
    title: "Easy job applications",
  },
  {
    icon: "/features/Frame-1.png",
    title: "0% Fees",
  },
  {
    icon: "/features/Frame-2.png",
    title: "Save applications for later",
  },
  {
    icon: "/features/Frame-3.png",
    title: "Staff Inventory",
  },
  {
    icon: "/features/Frame-4.png",
    title: "Unlimited addition of job listings",
  },
  {
    icon: "/features/Frame-5.png",
    title: "Task tracking",
  },
];
export const ourDiffFeatures = [
  {
    icon: "/OurDiff/Frame-0.png",
    title: "Task Tracking",
    des: "Efficiently monitor and manage tasks with our data-driven approach. We streamline HR processes to ensure tasks are tracked and completed effectively.",
  },
  {
    icon: "/OurDiff/Frame-1.png",
    title: "Employee Directory",
    des: "Centralize employee information with our flexible system. Easily access employee profiles, contact details, and more for seamless HR management.",
  },
  {
    icon: "/OurDiff/Frame-2.png",
    title: "Creating Job Vacancies",
    des: "Simplify job vacancy creation with our value-accelerating platform. Get support in crafting compelling job postings to attract top talent and drive organizational growth.",
  },
];
export const hitFeatures = [
  {
    icon: "/howItWorks/Frame-0.png",
    title: "Efficient Task Tracking",
    des: "Streamline task tracking for HR processes. Register and easily monitor progress on HR-related tasks in under 5 minutes.",
  },
  {
    icon: "/howItWorks/Frame-1.png",
    title: "Simplified Employee Directory",
    des: "Create a comprehensive employee directory effortlessly. Get organized with employee profiles and contact information ready in minutes.",
  },
  {
    icon: "/howItWorks/Frame-2.png",
    title: "Seamless Job Vacancy Creation",
    des: "Simplify job vacancy creation for HR. Access support to craft enticing job postings and attract top talent swiftly.",
  },
];

export const whoWeInvest = [
  {
    title: "HR Management",
    des: "Manage your team with an HR system they’ll (seriously) love.",
  },
  {
    title: "Contractor Management",
    des: "Pay and manage contractors and freelancers around the world.",
  },
  {
    title: "SRemote Talent ",
    des: "Post jobs and find qualified candidates from anywhere in the world.",
  },
];

export const testimonialsData = [
  {
    comment:
      "SUPER HAPPY! Not only do you get to see the best seed and Early Stage companies but the exciting part is there’s a bunch of investors",
    name: "Zach Lee",
    profession: "QA specialist, Matrix architect",
  },
  {
    comment:
      "I have been working with ZAINKEEPSCODE on our fundraising strategies. They understands the in depth strategies of Venture Capital and early stage fund raising/company",
    name: "Cheryl R. Weiss",
    profession: "Founder, Dubrow Cafeteria",
  },
  {
    comment:
      "Another masterpiece really digging into the art of venture funds, portfolio construction and deal mechanics! Loved it - I can say without hesitation that it is incredibly valuable for anyone who is investing",
    name: "Vicky R. Lane",
    profession: "Directork, Lafayette Radio",
  },
  {
    comment:
      "BlueVenture is the premier setting for entrepreneurs and investors alike to exchange ideas, and network. As an entrepreneur, I can rely on the BlueVenture to bring top caliber speakers, entrepreneurs and investors",
    name: "Jennifer Dubois",
    profession: "Manager, China Coast",
  },
];

export const signUpCompanyData = [
  {
    img: "/auth/company/1.svg",
    title: "Manage my workforce",
    points: [
      "Hire employees and contractors",
      "Manage and pay global teams",
      "Post open jobs on remote.com/jobs",
    ],
  },
  {
    img: "/auth/company/2.svg",
    title: "Attract new talent",
    points: ["Post open jobs on remote.com/jobs"],
  },
];

export const signUpIndividualData = [
  {
    img: "/auth/individual/1.svg",
    title: "I’m a freelancer",
    points: ["Manage my clients", "Submit invoices and get paid"],
  },
  {
    img: "/auth/individual/2.svg",
    title: "I’m a job seeker",
    points: ["Browse open opportunities", "Browse open opportunities"],
  },
];

export const SIDE_NAVIGATION_ITEMS = [
  {
    name: "Home",
    route: "/company-dashboard",
    icon: <RiHome5Line />,
    activePage: null,
  },
  {
    name: "Job Listings",
    route: "/company-dashboard/job-listings",
    activePage: "job-listings",

    icon: <MdOutlinePlaylistAddCircle />,
  },
  {
    name: "Employees",
    route: "/company-dashboard/employees",
    icon: <IoPeopleCircle />,
    activePage: "employees",
  },
];

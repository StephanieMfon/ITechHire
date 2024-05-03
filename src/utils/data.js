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
    title: "3x monthly revenue",
  },
  {
    icon: "/features/Frame-1.png",
    title: "Flat fee of 6-12%",
  },
  {
    icon: "/features/Frame-2.png",
    title: "Flexible repayments by revenue share",
  },
  {
    icon: "/features/Frame-3.png",
    title: "3-4 years repayment",
  },
  {
    icon: "/features/Frame-4.png",
    title: "$10-100k seed investment",
  },
  {
    icon: "/features/Frame-5.png",
    title: "2% of revenue up to 3X cap",
  },
];

export const ourDiffFeatures = [
  {
    icon: "/OurDiff/Frame-0.png",
    title: "Data Driven",
    des: "Our mission is to level the playing field for early stage growth capital. We provide capital that is unbiased, flexible and non dilutive with the execution support to accelerate value creation",
  },
  {
    icon: "/OurDiff/Frame-1.png",
    title: "flexible funding",
    des: "Funding that flexes as revenue grows with transparent costs and does not require dilution, personal guarantees or pitch decks",
  },
  {
    icon: "/OurDiff/Frame-2.png",
    title: "value accelerating",
    des: "On demand expertise to supercharge growth in areas that are hard to access for early stage founders",
  },
];

export const hitFeatures = [
  {
    icon: "/howItWorks/Frame-0.png",
    title: "Connect",
    des: "Register and qualify for funding in less than 5 mins. Connect revenue and marketing platforms you already use.",
  },
  {
    icon: "/howItWorks/Frame-1.png",
    title: "Get Funded",
    des: "Get a term sheet with upto 3 funding offers. Select option that best suits and complete onboarding to receive funds in days",
  },
  {
    icon: "/howItWorks/Frame-2.png",
    title: "Support Growth",
    des: "Access curated feed of actionable insights and on demand execution expertise. Auto qualify for follow on funding as you grow",
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

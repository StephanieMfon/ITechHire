"use client";
import Footer from "../src/components/Footer/Footer";
import Hero from "../src/components/Hero/Hero";
import HowItWorks from "../src/components/HowItWorks/HowItWorks";
import Navbar from "../src/components/Navbar/Navbar";
import OurDiff from "../src/components/OurDiff/OurDiff";
import Testimonials from "../src/components/Testimonials/Testimonials";
import WhatWeDo from "../src/components/WhatWeDo/WhatWeDo";
import WhoWeInvest from "../src/components/WhoWeInvest/WhoWeInvest";
import { motion, useAnimation } from "framer-motion";
import BrandingVideo from "../src/components/BrandingVideo/BrandingVideo";

export default function Home() {
  const controls = useAnimation();
  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />
      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--secondary-color)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{ amount: 0.4 }}
      >
        <OurDiff />
      </motion.div>

      <HowItWorks />

      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--primary-color)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{ amount: 0.4 }}
      >
        <WhoWeInvest />
      </motion.div>
      {/* <Testimonials /> */}
      <Footer />
    </motion.div>
  );
}

import React from "react";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <main>
      <Hero />;
      <Featured />
      <HowItWorks />
      <FeaturedMeals />
      <Testimonials />
    </main>
  );
};

export default HomePage;

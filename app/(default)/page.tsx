export const metadata = {
  title: "Orcinus Orca",
  description: "A powerful suite of user-centric products",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import React from "react";
// import Features from "@/components/features";
// import Testimonials from "@/components/testimonials";
// import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      {/* <Features /> */}
      {/* <Testimonials /> */}
      {/* <Cta /> */}
    </>
  );
}

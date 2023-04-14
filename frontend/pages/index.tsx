import React from "react";
import { HomeLayout } from "@/Layout";
import {
  Footer,
  Hero,
  Investments,
  Team,
  ValueAdd,
  WeAre,
  WhyNow,
} from "@/components/Landing";

export default function HomePage() {
  return (
    <HomeLayout>
      <Hero />
      <WeAre />
      <ValueAdd />
      <WhyNow />
      <Investments />
      <Team />
      <Footer />
    </HomeLayout>
  );
}

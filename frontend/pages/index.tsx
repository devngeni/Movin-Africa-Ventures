import { HomeLayout } from "@/Layout";
import {
  Hero,
  Investments,
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
    </HomeLayout>
  );
}

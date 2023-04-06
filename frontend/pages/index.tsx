import { HomeLayout } from "@/Layout";
import { Hero, ValueAdd, WeAre, WhyNow } from "@/components/Landing";

export default function HomePage() {
  return (
    <HomeLayout>
      <Hero />
      <WeAre />
      <ValueAdd />
      <WhyNow />
    </HomeLayout>
  );
}

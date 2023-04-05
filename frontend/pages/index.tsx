import { HomeLayout } from "@/Layout";
import { Hero, Investments, ValueAdd, WeAre } from "@/components/Landing";

export default function HomePage() {
  return (
    <HomeLayout>
      <Hero />
      <WeAre />
      <ValueAdd />
      <Investments/>
    </HomeLayout>
  );
}

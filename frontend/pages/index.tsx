import { HomeLayout } from "@/Layout";
import { Hero, ValueAdd, WeAre } from "@/components/Landing";

export default function HomePage() {
  return (
    <HomeLayout>
      <Hero />
      <WeAre />
      <ValueAdd />
    </HomeLayout>
  );
}

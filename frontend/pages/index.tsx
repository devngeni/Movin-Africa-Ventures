import { HomeLayout } from "@/Layout";
import { Hero, WeAre } from "@/components/Landing";

export default function HomePage() {
  return (
    <HomeLayout>
      <Hero />
      <WeAre />
    </HomeLayout>
  );
}

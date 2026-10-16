import { Hero } from "@/widgets/hero";
import { Advantages } from "@/widgets/advantages";
import { InstantResults } from "@/widgets/instant-result";
import { Career } from "@/widgets/career";
import { Privacy } from "@/widgets/privacy";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="max-w-270 mx-auto">
        <Advantages />
        <InstantResults />
        <Career />
        <Privacy/>
      </div>
    </>
  );
}
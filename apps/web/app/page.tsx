import { Hero } from "@/components/dynamic-zone/hero";

import dynamicZones from "@/lib/shared/dynamic-zones.json";

const [heroData, featureData, ...rest] = dynamicZones;
const CTAs = heroData?.CTAs || [];

export default function HomePage(): React.JSX.Element {
  return (
    <main className="border-4 border-white flex flex-col justify-center items-center h-screen w-full">
      {/* <span> heroData: {JSON.stringify(heroData?.CTAs, null, 2)} </span> */}
      {heroData && (
        <Hero
          heading={heroData.heading}
          sub_heading={heroData.sub_heading}
          CTAs={CTAs}
        />
      )}
    </main>
  );
}

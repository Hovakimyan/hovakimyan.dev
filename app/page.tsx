import Hero from "@/app/sections/Hero";
import Thesis from "@/app/sections/Thesis";
import WhatIDo from "@/app/sections/WhatIDo";
import LeadershipPillar from "@/app/sections/LeadershipPillar";
import AiPillar from "@/app/sections/AiPillar";
import TechStack from "@/app/sections/TechStack";
import SelectedImpact from "@/app/sections/SelectedImpact";
import VenturesPreview from "@/app/sections/VenturesPreview";
import NumbersLedger from "@/app/sections/NumbersLedger";
import Principles from "@/app/sections/Principles";
import CtaBanner from "@/app/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Thesis />
      <WhatIDo />
      <LeadershipPillar />
      <AiPillar />
      <TechStack />
      <SelectedImpact />
      <VenturesPreview />
      <NumbersLedger />
      <Principles />
      <CtaBanner />
    </>
  );
}

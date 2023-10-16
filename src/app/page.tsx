import GreatPlaceToWork from "./components/GreatplaceToWork/greatplacetowork";
import Hero from "./components/Hero/hero";
import Leaders from "./components/Leaders/leaders";
import OurValues from "./components/OurValues/ourvalues";
import Resource from "./components/Resource/resource";
import Culture from "./components/Culture/culture";
import Team from "./components/Testimonials/testimonials";
import WeWorkFamily from "./components/WeWorkFamily/weworkfamily";

export default function Home() {
  return (
    <>
      <Hero />
      <Culture />
      <Resource />
      <OurValues />

      <Team />
      <Leaders />
      <GreatPlaceToWork />
      <WeWorkFamily />
    </>
  );
}

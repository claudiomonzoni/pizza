

import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
   <>
  
  <Hero />
  <HomeMenu />
  <section className="mt-12 text-center">
    <SectionHeaders mainHeader={'Acerca de mis pizzas'} subHeader={'Nuestra historia'} />
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel iusto nesciunt eaque!</p>
    </section>
   </>
  );
}

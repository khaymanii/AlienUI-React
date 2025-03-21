import Hero from "@/components/Hero";
import WhyUseAlienUIReact from "@/components/WhyUseAlienUIReact";
import NewsLetter from "@/components/NewsLetter";
import FaQ from "@/components/FaQ";
import Inspiration from "@/components/Inspiration";
import Contributors from "@/components/Contributors";
import Products from "@/components/Products";
import InstallVSExtensionModal from "@/components/InstallVScodeExtension";

export default function Home() {
  return (
    <section>
      <InstallVSExtensionModal />
      <Hero />
      <WhyUseAlienUIReact />
      <Inspiration />
      <Products />
      <NewsLetter />
      <FaQ />
      <Contributors />
    </section>
  );
}

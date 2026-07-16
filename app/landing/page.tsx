import Image from "next/image";
import HeroSection from "./home/hero";
import CategoriesSection from "./home/categories";
import ProductSection from "./home/products";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <ProductSection />
    </main>
  );
}

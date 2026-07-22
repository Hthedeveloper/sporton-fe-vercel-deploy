
import HeroSection from "./home/hero";
import CategoriesSection from "./home/categories";
import ProductSection from "./home/products";
import { getAllCategories } from "../services/category.service";
import { getAllProducts } from "../services/product.service";

export default async function Home() {
  const [categories, products] = await Promise.all([
    getAllCategories(),
    getAllProducts()
  ])


  return (
    <main>
      <HeroSection  />
      <CategoriesSection categories={categories} />
      <ProductSection products={products}  />
    </main>
  );
}

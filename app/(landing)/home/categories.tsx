import { getImageUrl } from "@/app/lib/api";
import { Category } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const categoriesList = [
  {
    name: "Running",
    imageUrl: "/categories/category-running.svg",
  },
  {
    name: "Tennis",
    imageUrl: "/categories/category-tennis.svg",
  },
  {
    name: "Basketball",
    imageUrl: "/categories/category-basketball.svg",
  },
  {
    name: "Football",
    imageUrl: "/categories/category-football.svg",
  },
  {
    name: "Badminton",
    imageUrl: "/categories/category-badminton.svg",
  },
  {
    name: "Swimming",
    imageUrl: "/categories/category-swimming.svg",
  },
];

type TCategoriesProps = {
  categories: Category[]
}

const CategoriesSection = ({categories}: TCategoriesProps) => {
  return (
    <section id="category-section" className="container mx-auto pb-20">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Browse by Category </h2>
        <Link href="#" className="flex gap-2 text-primary font-medium">
          <span className="self-center">See All Categories</span>
          <FiArrowRight className="self-center" />{" "}
        </Link>
      </div>
      <div className="grid grid-cols-6 gap-12 mt-8">
        {categories.map((category) => (
          <div
            key={category._id}
            className="rounded-lg bg-gradient-to-r from-[#f1f1f1] to-[#f7f7f7] w-full aspect-square flex flex-col items-center justify-center gap-3"
          >
            <Image
              src={getImageUrl(category.imageUrl)}
              width={86}
              height={86}
              alt={category.name}
            />
            <div className="text-primary font-medium text-xl text-center">
              {category.name}
            </div>
          </div>
        ))}
        {/* ini batas bawah card */}
      </div>
    </section>
  );
};
export default CategoriesSection;

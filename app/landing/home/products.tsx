import Image from "next/image";
import Link from "next/link";
import Button from "../components/elements/Button";
import { FiPlus } from "react-icons/fi";

const ProductList = [
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 329000,
    imageUrl: "product-3.svg",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 999000,
    imageUrl: "product-2.svg",
  },
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    price: 119000,
    imageUrl: "product-1.svg",
  },
  {
    name: "SportsOn HyperSoccer v2",
    category: "Football",
    price: 458000,
    imageUrl: "product-4.svg",
  },
  {
    name: "SportsOn HyperSoccer v2",
    category: "Football",
    price: 458000,
    imageUrl: "product-4.svg",
  },
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    price: 119000,
    imageUrl: "product-5.svg",
  },
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 329000,
    imageUrl: "product-8.svg",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 999000,
    imageUrl: "product-7.svg",
  },
];

const ProductSection = () => {
  return (
    <section id="product-section" className="container mx-auto mt-32">
      <h2 className="font-bold italic text-4xl text-center mb-11">
        <span className="text-primary">OUR</span> <span>PRODUCTS</span>
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {ProductList.map((product, index) => (
          <Link
            href="#"
            key={index}
            className="p-1.5 bg-white hover:drop-shadow-xl duration-300"
          >
            <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
              <Image
                src={`/products/${product.imageUrl}`}
                alt={product.name}
                width={300}
                height={300}
                className="aspect-square objext-contain"
              />
              <Button className="w-10 h-10 p-2! absolute right-3 top-3">
                <FiPlus size={24} />
              </Button>
            </div>
            <h3 className="font-medium text-lg mb-1.5">{product.name}</h3>
            <div className="flex justify-between mb-8">
              <div className="text-gray-500">{product.category}</div>
              <div className="font-medium text-primary">
                {Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumSignificantDigits: 3,
                }).format(product.price)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;

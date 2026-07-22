"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import CartPopUp from "../shopping-cart/CartPopUp";
import { useState } from "react";
import { useCartStore } from "@/app/hooks/use-store";

const Header = () => {
  const {items} = useCartStore()
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  return (
    <header className="fixed w-full z-20 backdrop-blur-xl bg-white/30">
      <div className="flex justify-between items-center gap-10 container mx-auto py-7">
        <Image
          src="/logo/logo.svg"
          alt="sporton logo"
          width={127}
          height={30}
        />
        <nav className="flex gap-44 font-medium">
          <Link
            href="#"
            className="relative after:content-[''] after:block after:bg-primary after:rounded after:h-[3px] after:w-2/3 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1"
          >
            HOME
          </Link>
          <Link href="#">Category</Link>
          <Link href="#">Explore Products</Link>
        </nav>
        <div className="relative flex gap-10">
          <FiSearch size={24} />
          <button
            onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}
            className="relative cursor-pointer"
          >
            <FiShoppingBag size={24} />
            {items.length ?(
              <div className="bg-primary text-white rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[10px] text-center">
              {items.length}
            </div>
            ) : (
              <></>
            )}
          </button>
          {isCartPopupOpen && <CartPopUp />}
        </div>
      </div>
    </header>
  );
};

export default Header;

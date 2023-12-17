import { Heart, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="py-7 bg-black">
      <header className="container flex justify-between items-center mx-auto">
        {/* Logo */}
        <Link href={"/"} className="text-yellow-400 italic">
          Trade-Sphere
        </Link>
        <div className="w-[90%] max-w-lg">
          <input
            className="border border-white w-full px-4 transition py-2 rounded-full"
            placeholder="Search by name"
          />
        </div>
        <nav>
          <ul className="flex items-center gap-4 text-white">
            <li>
              <ShoppingCart color="currentColor" />
            </li>
            <li>
              <Heart color="currentColor" />
            </li>
            <li>
              <UserRound color="currentColor" />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

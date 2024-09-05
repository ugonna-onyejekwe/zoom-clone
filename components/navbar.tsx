import React from "react";
import { FaVideo } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-dark-1 py-[20px] px-[30px]">
      <div className="flex items-center gap-2 text-white-1 text-[20px] font-extrabold uppercase">
        <span className="text-blue-1 bg-dark-2 p-[10px] rounded-xl">
          <FaVideo />
        </span>
        yoom
      </div>
    </nav>
  );
};

export default Navbar;

// import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import SideNavbar from "./SideNavbar";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        {/* <Image src="/../public/tmp.png" alt="/" width="125" height="50" /> */}

        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
        </div>

        <div onClick={handleNav} className="md:hidden cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <SideNavbar status={nav} handle={handleNav} />
    </div>
  );
};

export default NavBar;

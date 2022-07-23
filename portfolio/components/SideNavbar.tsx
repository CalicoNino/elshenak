import React from "react";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
// import Image from "next/image";
import Link from "next/link";

const SideNavbar = (props: { status: any; handle: any }) => {
  const { status, handle } = props;
  const handleSideNav = () => {
    handle();
  };
  return (
    <div
      className={
        status ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
      }
    >
      <div
        className={
          status
            ? "fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div>
          <div className="flex w-full items-center justify-between">
            {/* <Image src="/../public/tmp.png" alt="/" width="87" height="35" /> */}

            <div
              onClick={handleSideNav}
              className="rounded-full shadow-lg shadow-gray-400  p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>

          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4">
              Lets Build Something Legendary together
            </p>
          </div>

          <div className="py-4 flex-col">
            <ul className="uppercase ">
              <Link href="/">
                <li onClick={handleSideNav} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={handleSideNav} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={handleSideNav} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={handleSideNav} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/">
                <li onClick={handleSideNav} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>

            <div className="pt-40">
              <p className="uppsercase tracking-widest text-[#5651e5]">
                Lets Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;

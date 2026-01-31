"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Sidebar() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/sultan", label: "Sultan" },
    { href: "/zen", label: "Zen" },
  ];

  function toggleSideBar() {
    setIsOpenSidebar(!isOpenSidebar);
  }

  return (
    <>
      <nav
        className={`h-screen  transition-all duration-300  ${isOpenSidebar ? "w-64  shadow-xl border-r border-neutral-200 bg-black/40 backdrop-blur-2xl" : "w-20 bg-transparent"} z-50 fixed left-0 `}
      >
        <div>
          <div className="mx-4 mt-5">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ rotate: 360 }}
              className="cursor-pointer"
              onClick={toggleSideBar}
            >
              <Menu size={40} className="text-neutral-600" />
            </motion.button>
          </div>
          <div className="flex flex-col justify-center items-center mt-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 0.8, transition: { duration: 1 } }}
            >
              {isOpenSidebar && (
                <Link href={"/"}>
                  <Image
                    src={"/icon.png"}
                    width={200}
                    height={200}
                    alt="icon one fish"
                  />
                </Link>
              )}
            </motion.div>
            <motion.div
              className="flex flex-col gap-5 justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpenSidebar ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpenSidebar && (
                <>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="font-semibold text-2xl"
                    >
                      {link.label}
                    </Link>
                  ))}
                </>
              )}
            </motion.div>
          </div>
        </div>
      </nav>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/type", label: "Type" },
    { href: "/contact", label: "Contact" },
  ];

  function toggleSideBar() {
    setIsOpenSidebar(!isOpenSidebar);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpenSidebar(false);
      }
    }

    if (isOpenSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenSidebar]);

  return (
    <>
      <nav
        ref={sidebarRef}
        className={`h-screen md:hidden transition-all duration-300  ${isOpenSidebar ? "w-64  shadow-xl border-r border-neutral-200 bg-black/40 backdrop-blur-2xl" : "w-20 bg-transparent"} z-50 fixed left-0 `}
      >
        <div className="mx-4 mt-5">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ rotate: 360 }}
            className="cursor-pointer"
            onClick={toggleSideBar}
          >
            {!isOpenSidebar && <Menu size={40} className="text-neutral-600" />}
            {isOpenSidebar && <X size={40} className="text-neutral-200" />}
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
                  src={"/logo/logo.png"}
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
                    className={`${link.href === pathname && "text-white font-semibold"} font-semibold text-neutral-500 text-xl`}
                  >
                    {link.label}
                  </Link>
                ))}
              </>
            )}
          </motion.div>
        </div>
      </nav>
    </>
  );
}

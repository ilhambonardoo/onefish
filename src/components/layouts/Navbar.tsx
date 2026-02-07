"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/type", label: "Type" },
  { href: "/contact", label: "Contact" },
  { href: "/maps", label: "Map" },
  { href: "/quality", label: "Quality" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className="w-full fixed hidden md:block z-50"
        animate={{
          height: scrolled ? 80 : 128,
          backgroundColor: scrolled
            ? "rgba(10, 10, 10, 0)"
            : "rgba(10, 10, 10, 0)",
          boxShadow: scrolled
            ? "0 4px 30px rgba(0, 0, 0, 0.3)"
            : "0 0px 0px rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.3 }}
        style={{
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        }}
      >
        <div className="justify-between flex w-full h-full">
          <motion.div
            className="w-36 ml-20 flex items-center"
            whileHover={{ scale: 1.2 }}
            animate={{
              scale: scrolled ? 0.85 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <Link href={"/"} className="md:block">
              <Image
                src={"/logo/logo.png"}
                width={140}
                height={100}
                alt="icon one fish"
              />
            </Link>
          </motion.div>
          <motion.div
            className="flex gap-10 justify-center items-center mr-9"
            animate={{
              opacity: scrolled ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((Nav) => (
              <motion.div key={Nav.href} whileHover={{ scale: 1.1 }}>
                <Link href={Nav.href}>
                  <p className="text-2xl text-neutral-950 hover:text-neutral-600 transition">
                    {Nav.label}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;

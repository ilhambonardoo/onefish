"use client";

import { socials } from "@/src/lib/utils/socialmedia";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-950 text-white bottom-0">
      <div className="flex flex-col md:flex-row justify-between p-6 md:p-10 max-w-7xl mx-auto gap-8 md:gap-0">
        <div className="flex-1">
          <h1 className="font-semibold text-xl md:text-2xl mb-4">
            Social Media
          </h1>
          <ul className="space-y-3">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink-500 transition text-sm md:text-base"
              >
                {social.icon}
                <span>{social.label}</span>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h1 className="font-semibold text-xl md:text-2xl mb-4">1Fish</h1>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a
                href="#"
                className="hover:text-white transition text-sm md:text-base"
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition text-sm md:text-base"
              >
                Produk
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition text-sm md:text-base"
              >
                Layanan
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition text-sm md:text-base"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h1 className="font-semibold text-xl md:text-2xl mb-4">Contact Us</h1>
          <ul className="space-y-2 text-gray-300">
            <li className="text-sm md:text-base">Email: info@1fish.com</li>
            <li className="text-sm md:text-base">Phone: +62 812 3456 7890</li>
            <li className="text-sm md:text-base">Alamat: Jakarta, Indonesia</li>
            <li className="text-sm md:text-base">
              Jam Operasional: 09:00 - 18:00
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-800 mt-6 md:mt-8 p-6 md:p-10">
        <p className="text-center text-gray-400 text-xs md:text-sm">
          © 2026 1Fish. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

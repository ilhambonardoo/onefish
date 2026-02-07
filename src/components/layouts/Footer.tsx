"use client";

import { Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-950 text-white bottom-0">
      <div className="flex justify-between p-10 max-w-7xl mx-auto">
        <div>
          <h1 className="font-semibold text-2xl mb-4">Social Media</h1>
          <ul className="space-y-3">
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink-500 transition"
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-500 transition"
              >
                <Facebook size={20} />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-500 transition"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold text-2xl mb-4">1Fish</h1>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Produk
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Layanan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold text-2xl mb-4">Contact Us</h1>
          <ul className="space-y-2 text-gray-300">
            <li>Email: info@1fish.com</li>
            <li>Phone: +62 812 3456 7890</li>
            <li>Alamat: Jakarta, Indonesia</li>
            <li>Jam Operasional: 09:00 - 18:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-800 mt-8 p-10">
        <p className="text-center text-gray-400 text-sm">
          © 2026 1Fish. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export const socials = [
  {
    icon: (
      <FaInstagram className="w-6 h-6 group-hover:text-pink-500 transition-colors" />
    ),
    label: "Instagram",
    href: "https://instagram.com",
  },
  {
    icon: (
      <FaFacebook className="w-6 h-6 group-hover:text-blue-500 transition-colors" />
    ),
    label: "Facebook",
    href: "https://facebook.com",
  },
  {
    icon: (
      <FaTiktok className="w-6 h-6 group-hover:text-white transition-colors" />
    ),
    label: "TikTok",
    href: "https://tiktok.com",
  },
];

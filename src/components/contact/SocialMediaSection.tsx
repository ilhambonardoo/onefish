"use client";
import { motion, spring } from "framer-motion";

import Link from "next/link";
import { socials } from "@/src/lib/utils/socialmedia";
const containerItemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: spring, stiffness: 80, damping: 15 },
  },
};

const SocialMediaSection = () => {
  return (
    <section className="w-full lg:w-1/2">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerItemVariants}
        className="mx-auto h-full bg-sultan-black/50 p-8 rounded-xl shadow-gold-glow/20 backdrop-blur-sm flex flex-col gap-6"
      >
        <h2 className="font-nb my-10 font-semibold text-2xl text-sultan-gold tracking-wide uppercase">
          Social Media
        </h2>
        <div className="flex flex-col gap-4">
          {socials.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              className="group flex items-center gap-4 p-4 rounded-xl w-fit transition-all duration-300 hover:border-sultan-gold/50 hover:shadow-gold-glow/20"
            >
              <motion.div
                variants={itemVariants}
                className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-sultan-gold/30 transition-colors duration-300"
              >
                {social.icon}
              </motion.div>
              <motion.span
                variants={itemVariants}
                className="font-nb text-lg tracking-wider text-gray-300 group-hover:text-white transition-colors"
              >
                {social.label}
              </motion.span>
            </Link>
          ))}
        </div>

        <span>
          Connect with us to taste the ocean without compromise, and awaken your
          senses to the true essence of the catch
        </span>
      </motion.div>
    </section>
  );
};

export default SocialMediaSection;

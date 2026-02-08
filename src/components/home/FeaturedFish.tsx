"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const featuredFishes = [
  {
    id: 1,
    name: "Black Phantom",
    type: "Tropical",
    image: "/example/ikancontoh.jpg",
    description: "Misterius dan elegan",
    rarity: "Langka",
  },
  {
    id: 2,
    name: "Deep Ocean",
    type: "Exotic",
    image: "/example/ikancontoh.jpg",
    description: "Dari kedalaman laut",
    rarity: "Sangat Langka",
  },
  {
    id: 3,
    name: "Midnight Gold",
    type: "Premium",
    image: "/example/ikancontoh.jpg",
    description: "Kilau emas di kegelapan",
    rarity: "Eksklusif",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export default function FeaturedFish() {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-80 h-80 bg-neutral-700/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-neutral-700/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Type of{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-stone-300 to-stone-400">
              Fish
            </span>
          </h2>
          <p className="text-neutral-100 text-lg max-w-2xl mx-auto">
            Rare and exclusive fish for true collectors
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {featuredFishes.map((fish) => (
            <motion.div
              key={fish.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-80 rounded-xl overflow-hidden mb-6 border border-stone-500/20 shadow-xl hover:border-stone-400/50 transition-colors duration-300">
                <Image
                  src={fish.image}
                  alt={fish.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>

                <div className="absolute top-4 right-4 bg-linear-to-r from-stone-400 to-stone-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                  {fish.rarity}
                </div>

                <div className="absolute top-4 left-4 bg-neutral-900/70 backdrop-blur-sm border border-neutral-800 text-stone-200 px-3 py-1 rounded-full text-xs font-geist">
                  {fish.type}
                </div>
              </div>

              <div className="px-2">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {fish.name}
                </h3>
                <p className="text-neutral-100 text-sm mb-4">
                  {fish.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-linear-to-r from-stone-400/20 to-stone-500/20 border border-stone-400/50 text-stone-200 font-geist font-semibold rounded-lg hover:from-stone-400/40 hover:to-stone-500/40 hover:border-stone-300 hover:text-stone-100 transition-all duration-300"
                >
                  Pelajari Lebih Lanjut
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

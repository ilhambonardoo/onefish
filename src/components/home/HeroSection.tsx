"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import { fishData } from "@/src/lib/data/fishExample";
import Link from "next/link";

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="min-h-screen flex flex-col bg-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neutral-700/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neutral-700/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex-col flex w-full relative z-10 pt-24"
      >
        <div className="mt-8 md:mt-16 flex-col md:mx-8 flex gap-8 items-center md:items-start">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center md:text-left text-transparent bg-clip-text bg-linear-to-r from-stone-300 via-stone-200 to-stone-300 font-permanent_marker text-6xl md:text-7xl font-bold drop-shadow-lg"
          >
            ONEFISH
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="h-1 w-32 bg-linear-to-r from-stone-300 to-stone-400 rounded-full"
          ></motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center text-sm md:text-lg text-stone-300/80 font-geist tracking-widest uppercase"
          >
            Premium Fish Collection
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full"
          >
            <p className="max-w-7xl font-nb font-bold md:text-5xl text-stone-100  md:text-left text-center w-full md:leading-16 tracking-wide">
              Dive into a curated collection of aquatic excellence. Meticulously
              hand-picked to ensure unrivaled vitality and breathtaking beauty.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full relative h-80 md:h-125 overflow-hidden rounded-2xl mt-12 md:mt-16 shadow-2xl"
        >
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-20 pointer-events-none"></div>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onReachBeginning={() => setIsBeginning(true)}
            onReachEnd={() => setIsEnd(true)}
            onFromEdge={() => {
              setIsBeginning(false);
              setIsEnd(false);
            }}
            className="w-full h-full hero-swiper-custom"
            data-beginning={isBeginning}
            data-end={isEnd}
          >
            {fishData.map((fish) => (
              <SwiperSlide key={fish.id} className="relative">
                <Image
                  src={fish.image}
                  alt={fish.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent flex flex-col items-center justify-end pb-12">
                  <motion.div
                    key={`content-${activeIndex}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                  >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 px-4 drop-shadow-lg">
                      {fish.title}
                    </h2>
                    <p className="text-slate-200 text-center max-w-2xl px-4 text-base md:text-lg drop-shadow-lg">
                      {fish.description}
                    </p>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-16 flex justify-center pb-8"
        >
          <Link href={"/type"}>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(214, 211, 202, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-linear-to-r cursor-pointer from-stone-100 to-stone-200 text-black font-geist font-bold rounded-lg hover:shadow-xl transition-all duration-300"
            >
              Visit Collection
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

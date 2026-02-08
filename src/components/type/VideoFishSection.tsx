"use client";

import { motion } from "framer-motion";
import { ikans } from "@/src/lib/data/ikanMP4";
import "next-cloudinary/dist/cld-video-player.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { VideoFishCard } from "./VideoFishCard";

const VideoFishSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative bg-black py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-40 right-20 w-96 h-96 bg-stone-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-neutral-900/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "100px" }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: false, margin: "100px" }}
            className="text-transparent bg-clip-text bg-lienar-to-r from-stone-300 via-stone-200 to-stone-300 text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Premium Fish Inventory
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, margin: "100px" }}
            className="h-1 w-24 bg-lienar-to-r from-stone-400 to-stone-500 rounded-full mx-auto mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, margin: "100px" }}
            className="text-stone-300/80 text-base md:text-lg max-w-2xl mx-auto"
          >
            High-quality fish available for both individual and bulk orders.
            Direct from trusted breeders with guaranteed freshness and health.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "50px" }}
          className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {ikans.map((fish, index) => (
            <VideoFishCard key={fish.id} fish={fish} index={index} />
          ))}
        </motion.div>

        <div className="md:hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="pb-16"
          >
            {ikans.map((fish) => (
              <SwiperSlide key={fish.id}>
                <VideoFishCard fish={fish} index={0} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default VideoFishSection;

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ikans } from "@/src/lib/data/ikanMP4";
import "next-cloudinary/dist/cld-video-player.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { VideoFishCard } from "./VideoFishCard";
import { X, MessageCircle } from "lucide-react";

const VideoFishSection = () => {
  const [selectedFish, setSelectedFish] = useState<(typeof ikans)[0] | null>(
    null,
  );

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
          className="text-center my-12 md:my-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:text-3xl text-2xl font-geist font-bold text-stone-300"
          >
            More Type Of Fish
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, margin: "100px" }}
            className="bg-clip-text bg-lienar-to-r text-stone-500 from-stone-300 via-stone-200 to-stone-300 text-2xl uppercase font-geist font-semibold my-4"
          >
            Premium Fish Inventory
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="h-1 w-64 bg-linear-to-r from-stone-300 to-stone-400 mx-auto rounded-full"
          ></motion.div>
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
            className="text-stone-200 text-3xl md:text-5xl max-w-4xl mx-auto"
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
            <VideoFishCard
              key={fish.id}
              fish={fish}
              index={index}
              onOpenDetails={setSelectedFish}
            />
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
                <VideoFishCard
                  fish={fish}
                  index={0}
                  onOpenDetails={setSelectedFish}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <AnimatePresence>
        {selectedFish && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFish(null)}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-stone-900 border border-stone-700/50 rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedFish(null)}
                className="absolute top:0 right-0 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-stone-300 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto">
                <h3 className="text-2xl md:text-3xl font-bold font-geist text-stone-100 mb-6">
                  {selectedFish.label}
                </h3>

                <div className="space-y-6">
                  <div className="bg-stone-800/50 rounded-xl p-6 border border-stone-800">
                    <h4 className="text-lg font-semibold text-stone-300 mb-4">
                      Deskripsi Lengkap
                    </h4>
                    <div className="space-y-3">
                      {selectedFish.description.split("\n").map((line, idx) => (
                        <p
                          key={idx}
                          className="text-stone-400 text-sm md:text-base leading-relaxed"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="bg-emerald-900/20 border border-emerald-900/50 rounded-xl p-4">
                      <p className="text-emerald-400 text-sm text-center">
                        Tertarik dengan ikan ini? Hubungi kami langsung via
                        WhatsApp untuk pemesanan dan negosiasi.
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        const message = `Halo, saya tertarik dengan ikan ${selectedFish.label}. Bisakah saya mendapatkan detail lebih lanjut?`;
                        const url = `https://wa.me/${
                          selectedFish.whatsapp || "62895614532654"
                        }?text=${encodeURIComponent(message)}`;
                        window.open(url, "_blank");
                      }}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
                    >
                      <MessageCircle size={24} />
                      Pesan Sekarang via WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoFishSection;

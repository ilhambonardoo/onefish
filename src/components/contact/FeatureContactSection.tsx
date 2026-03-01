"use client";

import { motion, spring } from "framer-motion";

const containerVariants = {
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

const FeatureContactSection = () => {
  return (
    <section className="w-full lg:w-1/2">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="mx-auto bg-sultan-black/50 px-4 rounded-xl shadow-gold-glow/20 backdrop-blur-sm"
      >
        <motion.h2
          variants={itemVariants}
          className="font-nb mb-10 font-semibold text-2xl text-sultan-gold tracking-wide uppercase"
        >
          Questions fast
        </motion.h2>
        <form className="flex flex-col gap-6">
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm text-white font-semibold tracking-wider font-nb uppercase cursor-pointer"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Input your name"
              className="w-full bg-zinc-900/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-sultan-gold focus:ring-1 focus:ring-sultan-gold transition-colors duration-300"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="text-sm text-white font-semibold tracking-wider font-nb uppercase cursor-pointer"
            >
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+1 23245 2098"
              className="w-full bg-zinc-900/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-sultan-gold focus:ring-1 focus:ring-sultan-gold transition-colors duration-300"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm text-white font-semibold tracking-wider font-nb uppercase cursor-pointer"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Write your message......"
              className="w-full bg-zinc-900/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-sultan-gold focus:ring-1 focus:ring-sultan-gold transition-colors duration-300 resize-none"
            />
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="mt-4 bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-neutral-200 cursor-pointer transition-colors duration-300 font-nb uppercase tracking-widest shadow-lg hover:shadow-gold-glow"
          >
            Send
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default FeatureContactSection;

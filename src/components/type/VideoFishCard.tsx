import { ikans } from "@/src/lib/data/ikanMP4";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CldVideoPlayer } from "next-cloudinary";

export const VideoFishCard = ({
  fish,
  index,
}: {
  fish: (typeof ikans)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: false, margin: "50px" }}
      className="group bg-neutral-900/40 backdrop-blur-sm border border-stone-600/20 rounded-xl overflow-hidden hover:border-stone-500/40 transition-all duration-300 hover:bg-neutral-800/60 h-full flex flex-col"
    >
      <div className="relative bg-black aspect-square overflow-hidden rounded-t-xl">
        <CldVideoPlayer
          width={400}
          height={400}
          src={fish.video}
          controls={true}
          autoPlay={false}
          muted={true}
          fluid={true}
          className="!rounded-none"
        />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-stone-100 group-hover:text-white transition-colors mb-4 leading-snug">
          {fish.label}
        </h3>

        <ul className="space-y-2 flex-1 mb-6">
          {fish.description.split("\n").map((point, idx) => (
            <li
              key={idx}
              className="text-xs text-stone-400 leading-relaxed flex items-start gap-2"
            >
              <span className="text-emerald-400 font-bold mt-0.5 shrink-0">
                ✓
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
        >
          <MessageCircle size={18} />
          Chat Now
        </motion.button>
      </div>
    </motion.div>
  );
};

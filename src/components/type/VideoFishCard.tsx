import { ikans } from "@/src/lib/data/ikanMP4";
import { motion } from "framer-motion";
import { Info, MessageCircle } from "lucide-react";
import { CldVideoPlayer } from "next-cloudinary";

export const VideoFishCard = ({
  fish,
  index,
  onOpenDetails,
}: {
  fish: (typeof ikans)[0];
  index: number;
  onOpenDetails: (fish: (typeof ikans)[0]) => void;
}) => {
  const handleOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Halo, saya tertarik dengan ikan ${fish.label}. Apakah barang masih ada?`;
    const url = `https://wa.me/${fish.whatsapp || "62895614532654"}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(url, "_blank");
  };

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
          className="rounded-none!"
        />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-stone-100 group-hover:text-white transition-colors mb-4 leading-snug">
          {fish.label}
        </h3>

        <div className="flex gap-3 mt-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleOrder}
            className="flex-1 bg-linear-to-r cursor-pointer from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 text-sm"
          >
            <MessageCircle size={16} />
            Pesan
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onOpenDetails(fish)}
            className="flex-1 bg-stone-800 hover:bg-stone-700 cursor-pointer border border-stone-700 hover:border-stone-600 text-stone-200 font-semibold py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 text-sm"
          >
            <Info size={16} />
            Detail
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

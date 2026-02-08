import { Swiper } from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperSlide = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  direction: "horizontal",
});

export default SwiperSlide;

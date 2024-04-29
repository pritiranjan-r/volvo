// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import VolvoCar from "./VolvoCar";

// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";

export default ({ data }: { data: VolvoType[] }) => {
  return (
    <section className="w-full">
      <div className=" h-screen">
        <ul className="h-full w-full ">
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Pagination, A11y]}
            className="h-full w-full"
          >
            {data.map((volvo) => (
              <SwiperSlide key={`mobile-${volvo.id}`}>
                <VolvoCar {...{ volvo }} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

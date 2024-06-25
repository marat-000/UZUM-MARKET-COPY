import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

export function Carousel() {
  return (
    <div className="box-border m-auto p-[10px]">
      <Swiper 
        className="max-w-[1300px]  m-auto p-[20px] rounded-[20px]"
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <img
            className="w-[100%] h-716px"
            src="https://images.uzum.uz/cpg65vnfrr82f0a5hh3g/main_page_banner.jpg"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100%] h-716px"
            src="https://images.uzum.uz/cpcqfrscrcfqljg1atn0/main_page_banner.jpg"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100%] h-716px"
            src="https://images.uzum.uz/cper47nfrr82f0a57d20/main_page_banner.jpg"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100%] h-716px"
            src="https://images.uzum.uz/cpcqe8nfrr82f0a4qntg/main_page_banner.jpg"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100%] h-716px"
            src="https://images.uzum.uz/cpg5b1bmdtjnp738ea10/main_page_banner.jpg"
            alt="img"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-[100%] h-716px"
            src="https://images.uzum.uz/cpcsva3mdtjnp737pdqg/main_page_banner.jpg"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100%] h-716px"
            src="https://images.uzum.uz/cot30tc0u44tu6doifl0/main_page_banner.jpg"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100%] h-716px"
            src="https://images.uzum.uz/co0o1j6pom4ma10qsn6g/main_page_banner.jpg"
            alt="img"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

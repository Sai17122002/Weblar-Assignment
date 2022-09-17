import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SwiperLogo.css";

// import required modules
import { Navigation } from "swiper";

//Import Vectors
import Logoipsum1 from "../../Images/Logoipsum1.png";
import Logoipsum2 from "../../Images/Logoipsum2.png";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Logoipsum1} width="5" height="5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logoipsum2} width="5" height="5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logoipsum1} width="5" height="5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logoipsum2} width="5" height="5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logoipsum1} width="5" height="5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logoipsum2} width="5" height="5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logoipsum1} width="5" height="5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logoipsum2} width="5" height="5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logoipsum1} width="5" height="5" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

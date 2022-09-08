// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import doubleQuotes from "../../icons/double-quotes-l.svg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div>
            <img  src={doubleQuotes} alt="double-quotes"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.</p>
            <h5>Guy Hawkins</h5>
            <h7>CEO, Founder</h7>
            </div></SwiperSlide>
            <SwiperSlide><div>
            <img  src={doubleQuotes} alt="double-quotes"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.</p>
            <h5>Cameron Williamson</h5>
            <h7>CEO, Founder</h7>
            </div></SwiperSlide>
              <SwiperSlide><div>
            <img  src={doubleQuotes} alt="double-quotes"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.</p>
            <h5>Cody Fisher</h5>
            <h7>CEO, Founder</h7>
            </div></SwiperSlide>  <SwiperSlide><div>
            <img  src={doubleQuotes} alt="double-quotes"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.</p>
            <h5>Guy Hawkins</h5>
            <h7>CEO, Founder</h7>
            </div></SwiperSlide>
            <SwiperSlide><div>
            <img  src={doubleQuotes} alt="double-quotes"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.</p>
            <h5>Cameron Williamson</h5>
            <h7>CEO, Founder</h7>
            </div></SwiperSlide>
    
      </Swiper>
    </>
  );
}

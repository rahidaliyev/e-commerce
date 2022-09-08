// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import newspeople from "../../icons/newscarousel.svg"
import author from "../../icons/Author.svg"
import "./styles2.css";

// import required modules
import { Pagination } from "swiper";

export default function NewsCarousel() {
  return (
    <>
      <Swiper
      loop={true}
         autoplay={true}
        slidesPerView={3}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide id="swiperper">
            <div id="peoplecon"
            >  <img id="newspeople" src={newspeople} alt="people"/>
            <img id="authorpeople" src={author} alt="people"/>
            <h5 id="mu">We Start Selling WordPress Themes Soon</h5>
            </div>
        </SwiperSlide>
        <SwiperSlide id="swiperper">
            <div id="peoplecon"
            >  <img id="newspeople" src={newspeople} alt="people"/>
            <img id="authorpeople" src={author} alt="people"/>
            <h5 id="mu">We Start Selling WordPress Themes Soon</h5>
            </div>
        </SwiperSlide>      <SwiperSlide id="swiperper">
            <div id="peoplecon"
            >  <img id="newspeople" src={newspeople} alt="people"/>
            <img id="authorpeople" src={author} alt="people"/>
            <h5 id="mu">We Start Selling WordPress Themes Soon</h5>
            </div>
        </SwiperSlide>      <SwiperSlide id="swiperper">
            <div id="peoplecon"
            >  <img id="newspeople" src={newspeople} alt="people"/>
            <img id="authorpeople" src={author} alt="people"/>
            <h5 id="mu">We Start Selling WordPress Themes Soon</h5>
            </div>
        </SwiperSlide>      <SwiperSlide id="swiperper">
            <div id="peoplecon"
            >  <img id="newspeople" src={newspeople} alt="people"/>
            <img id="authorpeople" src={author} alt="people"/>
            <h5 id="mu">We Start Selling WordPress Themes Soon</h5>
            </div>
        </SwiperSlide>
     
       
  
       

   
      </Swiper>
    </>
  );
}

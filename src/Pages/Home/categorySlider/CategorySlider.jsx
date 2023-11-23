import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import sliderImage1 from '../../../assets/home/slide1.jpg'
import sliderImage2 from '../../../assets/home/slide2.jpg'
import sliderImage3 from '../../../assets/home/slide3.jpg'
import sliderImage4 from '../../../assets/home/slide4.jpg'
import sliderImage5 from '../../../assets/home/slide5.jpg'

const CategorySlider = () => {
  return (
    <div className='mb-12 mt-10 px-5 lg:px-0'>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={sliderImage1} alt="" className='w-full'/>
            <h4 className="-mt-12 text-xl md:text-3xl text-center text-white uppercase font-semibold">Salad</h4>
        </SwiperSlide>
        <SwiperSlide>
        <img src={sliderImage2} alt="" className='w-full'/>
        <h4 className="-mt-12 text-xl md:text-3xl text-center text-white uppercase font-semibold">pizza</h4>
        </SwiperSlide>
        <SwiperSlide>
        <img src={sliderImage3} alt="" className='w-full'/>
        <h4 className="-mt-12 text-xl md:text-3xl text-center text-white uppercase font-semibold">soup</h4>
        </SwiperSlide>
        <SwiperSlide>
        <img src={sliderImage4} alt="" className='w-full'/>
        <h4 className="-mt-12 text-xl md:text-3xl text-center text-white uppercase font-semibold">cake</h4>
        </SwiperSlide>
        <SwiperSlide>
        <img src={sliderImage5} alt="" className='w-full'/>
        <h4 className="-mt-12 text-xl md:text-3xl text-center text-white uppercase font-semibold">salad</h4>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategorySlider;

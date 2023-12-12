import SectionHeader from "../../../components/sectionHeader/sectionHeader";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div>
      <SectionHeader
        subHeader={"---What Our Clients Say---"}
        mainHeader={"TESTIMONIALS"}
      ></SectionHeader>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {review.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center justify-center m-20">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p className="text-center my-6 text-xl">{review.details}</p>
                <h3 className="text-3xl text-yellow-500 font-bold">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;

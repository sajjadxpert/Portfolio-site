import React from "react";
import "./testimonials.css";
import t1 from "../../assets/avatar1.jpg";
import t2 from "../../assets/avatar2.jpg";
import t3 from "../../assets/avatar3.jpg";
import t4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Testimonials = () => {
  const data = [
    {
      id: 1,
      avatar: t1,
      name: "Client one",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde delectus harum nisi magnam vero nesciunt fugit earum autem debitis velit.",
    },
    {
      id: 2,
      avatar: t2,
      name: "Client two",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde delectus harum nisi magnam vero nesciunt fugit earum autem debitis velit.",
    },
    {
      id: 3,
      avatar: t3,
      name: "Client three",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde delectus harum nisi magnam vero nesciunt fugit earum autem debitis velit.",
    },
    {
      id: 4,
      avatar: t4,
      name: "Client four",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde delectus harum nisi magnam vero nesciunt fugit earum autem debitis velit.",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, avatar, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Testimonial one" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

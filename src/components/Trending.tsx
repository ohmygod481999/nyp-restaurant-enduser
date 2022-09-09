import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../styles/Trending.css";

export default function Trending() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
    >
      <SwiperSlide className="trending-item">
        <img src="/img/trending-item-1.jpg" />
        <div className="p-3 position-relative trending-item-detail">
          <div className="list-card-body">
            <h6 className="mb-1">
              <a href="restaurant.html" className="text-black" tabIndex={0}>
                Famous Dave's Bar-B-Que
              </a>
            </h6>
            <p className="text-gray mb-3">Vegetarian • Indian • Pure veg</p>
            <p className="text-gray mb-3 time">
              <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                <i className="feather-clock" /> 15–30 min
              </span>{" "}
              <span className="float-right text-black-50"> $350 FOR TWO</span>
            </p>
          </div>
          <div className="list-card-badge">
            <span className="badge badge-danger">OFFER</span>{" "}
            <small> Use Coupon OSAHAN50</small>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="trending-item">
        <img src="/img/trending-item-2.jpg" />
        <div className="p-3 position-relative trending-item-detail">
          <div className="list-card-body">
            <h6 className="mb-1">
              <a href="restaurant.html" className="text-black" tabIndex={0}>
                Famous Dave's Bar-B-Que
              </a>
            </h6>
            <p className="text-gray mb-3">Vegetarian • Indian • Pure veg</p>
            <p className="text-gray mb-3 time">
              <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                <i className="feather-clock" /> 15–30 min
              </span>{" "}
              <span className="float-right text-black-50"> $350 FOR TWO</span>
            </p>
          </div>
          <div className="list-card-badge">
            <span className="badge badge-danger">OFFER</span>{" "}
            <small> Use Coupon OSAHAN50</small>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="trending-item">
        <img src="/img/trending-item-3.jpg" />
        <div className="p-3 position-relative trending-item-detail">
          <div className="list-card-body">
            <h6 className="mb-1">
              <a href="restaurant.html" className="text-black" tabIndex={0}>
                Famous Dave's Bar-B-Que
              </a>
            </h6>
            <p className="text-gray mb-3">Vegetarian • Indian • Pure veg</p>
            <p className="text-gray mb-3 time">
              <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                <i className="feather-clock" /> 15–30 min
              </span>{" "}
              <span className="float-right text-black-50"> $350 FOR TWO</span>
            </p>
          </div>
          <div className="list-card-badge">
            <span className="badge badge-danger">OFFER</span>{" "}
            <small> Use Coupon OSAHAN50</small>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

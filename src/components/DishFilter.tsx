import React, { useRef, useState } from "react";
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from '@apollo/client';
import { GET_PRODUCT_CATEGORY } from "./../requests/products"
import * as configs from "./../configs/Slider.configs.js"

import "swiper/css";
import "swiper/css/pagination";
import "./../styles/DishFilter.css"

interface Item {
    name: string
    image: string
    id: number
}
export default function DishFilter() {

    const { loading, error, data } = useQuery(GET_PRODUCT_CATEGORY);

    return <div>
        <Swiper
            breakpoints={configs.responsive}
            slidesPerView={6}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            className="mySwiper"
        >

            {data?.product_category?.map((item:Item, index:number) => <SwiperSlide key={index}>
                <div className="slide-item">
                    <Link className="rounded d-block p-2 text-center shadow" to={`products/category=${item.id}`}>
                        <img style={{ width: 99, height: 77 }} src={item.image} className="slide-item-img mb-2" />
                        <p className="m-0 small">{item.name}</p>
                    </Link>
                </div>
            </SwiperSlide>)}

        </Swiper>
    </div>
}
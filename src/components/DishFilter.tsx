import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_CATEGORY } from "./../requests/products";
import * as configs from "../configs/slider.configs";

import "swiper/css";
import "swiper/css/pagination";
import "./../styles/DishFilter.css";
// import * as configs from "./../configs/Slider.configs"

import { responsive } from "../configs/slider.configs";

interface Item {
    name: string;
    thumbnail: string;
    id: number;
}
export default function DishFilter() {
    let { company_id, branch_id, table_id } = useParams();
    const { loading, error, data } = useQuery(GET_PRODUCT_CATEGORY, {
        variables: {
            company_id,
        },
    });

    return (
        <div>
            <Swiper
                breakpoints={configs.responsive}
                slidesPerView={6}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
            >
                {data?.product_category?.map((item: Item, index: number) => (
                    <SwiperSlide key={index}>
                        <div className="slide-item">
                            <Link
                                className="rounded d-block p-2 text-center shadow"
                                to={`/${company_id}/${branch_id}/${table_id}/products/category=${item.id}`}
                            >
                                <img
                                    style={{ width: 99, height: 77 }}
                                    src={item.thumbnail}
                                    className="slide-item-img mb-2"
                                />
                                <p className="m-0 small">{item.name}</p>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

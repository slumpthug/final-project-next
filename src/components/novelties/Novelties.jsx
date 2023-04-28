"use client";
import React from 'react';
import css from './Novelties-style.module.css';
import Image from 'next/image';
import bag from '../../../public/novelties/bag.jpg';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import MainButton from '../main-button/MainButton';

const Novelties = () => {
    return (
        <div className={css.novelties}>
            <div className={css.container}>
                <div className={css.novelties__titles}>
                    <h1>НОВИНКИ</h1>
                    <h3>648 ОБНОВЛЕНИЙ</h3>
                </div>
                <div className={css.novelties__slider}>
                    <Swiper
                        slidesPerView={4}
                        initialSlide={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className={css.swiper}
                    >
                        <SwiperSlide className={css.swiper_slide}>
                            <div className={css.novelties__card}>
                                <Image className={css.bag} src={bag} alt="bag" />
                                <h5>saint laurent</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={css.swiper_slide}>
                            <div className={css.novelties__card}>
                                <Image className={css.bag} src={bag} alt="bag" />
                                <h5>saint laurent</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={css.swiper_slide}>
                            <div className={css.novelties__card}>
                                <Image className={css.bag} src={bag} alt="bag" />
                                <h5>saint laurent</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={css.swiper_slide}>
                            <div className={css.novelties__card}>
                                <Image className={css.bag} src={bag} alt="bag" />
                                <h5>saint laurent</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={css.swiper_slide}>
                            <div className={css.novelties__card}>
                                <Image className={css.bag} src={bag} alt="bag" />
                                <h5>saint laurent</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={css.swiper_slide}>
                            <div className={css.novelties__card}>
                                <Image className={css.bag} src={bag} alt="bag" />
                                <h5>saint laurent</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={css.swiper_slide}>
                            <div className={css.novelties__card}>
                                <Image className={css.bag} src={bag} alt="bag" />
                                <h5>saint laurent</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={css.swiper_slide}>
                            <div className={css.novelties__card}>
                                <Image className={css.bag} src={bag} alt="bag" />
                                <h5>saint laurent</h5>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <MainButton text='смотреть все'/>
            </div>
        </div>
    );
};

export default Novelties;
"use client";
import React from 'react';
import css from './Promotion-style.module.css';
import Image from 'next/image';
import bag from '../../../public/novelties/bag.jpg';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import MainButton from '../main-button/MainButton';

const Promotion = () => {
    return (
        <div className={css.promotion}>
            <div className={css.container}>
                <div className={css.promotion__billboard}>
                    <h2>
                        Скидки <br /> <span> до -70%</span>
                    </h2>
                </div>
                <div className={css.promotion__info}>
                    <h2>скидки</h2>
                    <div className={css.promotion__slider}>
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
                                <div className={css.promotion__card}>
                                    <Image className={css.bag} src={bag} alt="bag" />
                                    <h5>saint laurent</h5>
                                    <div>
                                        <span>123 000 ₽</span>
                                        <span>96 000 ₽</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={css.swiper_slide}>
                                <div className={css.promotion__card}>
                                    <Image className={css.bag} src={bag} alt="bag" />
                                    <h5>saint laurent</h5>
                                    <div>
                                        <span>123 000 ₽</span>
                                        <span>96 000 ₽</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={css.swiper_slide}>
                                <div className={css.promotion__card}>
                                    <Image className={css.bag} src={bag} alt="bag" />
                                    <h5>saint laurent</h5>
                                    <div>
                                        <span>123 000 ₽</span>
                                        <span>96 000 ₽</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={css.swiper_slide}>
                                <div className={css.promotion__card}>
                                    <Image className={css.bag} src={bag} alt="bag" />
                                    <h5>saint laurent</h5>
                                    <div>
                                        <span>123 000 ₽</span>
                                        <span>96 000 ₽</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={css.swiper_slide}>
                                <div className={css.promotion__card}>
                                    <Image className={css.bag} src={bag} alt="bag" />
                                    <h5>saint laurent</h5>
                                    <div>
                                        <span>123 000 ₽</span>
                                        <span>96 000 ₽</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={css.swiper_slide}>
                                <div className={css.promotion__card}>
                                    <Image className={css.bag} src={bag} alt="bag" />
                                    <h5>saint laurent</h5>
                                    <div>
                                        <span>123 000 ₽</span>
                                        <span>96 000 ₽</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={css.swiper_slide}>
                                <div className={css.promotion__card}>
                                    <Image className={css.bag} src={bag} alt="bag" />
                                    <h5>saint laurent</h5>
                                    <div>
                                        <span>123 000 ₽</span>
                                        <span>96 000 ₽</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={css.swiper_slide}>
                                <div className={css.promotion__card}>
                                    <Image className={css.bag} src={bag} alt="bag" />
                                    <h5>saint laurent</h5>
                                    <div>
                                        <span>123 000 ₽</span>
                                        <span>96 000 ₽</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <MainButton text='смотреть все'/>
                </div>
            </div>
        </div>
    );
};

export default Promotion;
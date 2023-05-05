"use client";
import React, { useRef, useState } from "react";
import css from './Product-style.module.css';
import logo from '../../../public/product/logo.jpg';
import street from '../../../public/product/street.jpg';
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

const Product = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (    
        <div className={css.product}>
            <div className={css.container}>
                <div className={css.product__slider}>
                    <Swiper
                        style={{
                          "--swiper-navigation-color": "#fff",
                          "--swiper-pagination-color": "#fff",
                        }}
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className={css.swiper__two}
                    >
                        <SwiperSlide className={css.swiper_slide}>
                          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className={css.swiper_slide}>
                          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className={css.swiper_slide}>
                          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className={css.swiper_slide}>
                          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className={css.swiper_slide}>
                          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={5}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className={css.swiper}
                    >
                        <SwiperSlide className={css.swiper_slide}>
                          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className={css.swiper_slide}>
                          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className={css.swiper_slide}>
                          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className={css.swiper_slide}>
                          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className={css.swiper_slide}>
                          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className={css.product__info}>
                    <div className={css.product__titles}>
                        <h1>
                            Замшевая куртка-бомбер на овчине <span>Brunello Cucinelli</span>
                        </h1>
                        <span>Артикул: MTS806699/.C1091-1-1</span>
                    </div>
                    <div className={css.product__price}>
                        <span>123 000 ₽</span>
                        <span>96 000 ₽</span>
                    </div>
                    <div className={css.product__size}>
                        <button>50</button>
                        <button>52</button>
                        <button>54</button>
                        <button>56</button>
                    </div>
                    <div className={css.product__buttons}>
                        <button>в корзину</button>
                        <button>быстрый заказ</button>
                    </div>
                    <div className={css.product__description}>
                        <p>
                            Куртка-бомбер из замшевого ширлинга Texture, который имеет бархатистый и матовый вид с наружной стороны. Пушистая и теплая внутренняя сторона обеспечивает должную защиту для холодного сезона.
                        </p>
                        <span>Данная модель большемерит на размер.</span>
                        <ul>
                            <li>Материал: <span>100% дубленая кожа</span></li>
                            <li>Подкладка: <span>100% овчина</span></li>
                            <li>Производитель: <span>Италия</span></li>
                        </ul>
                    </div>
                    <div className={css.product__address}>
                        <Image className={css.logo} src={logo} alt="brand logo" />
                        <div className={css.product__card}>
                            <Image className={css.street} src={street} alt="street" />
                            <div className={css.card__description}>
                                <h4>Товар в наличии</h4>
                                <a href="#">www.artigiani.boutique</a>
                                <a href="#">Санкт-Петербург, Большой проспект ПС 13</a>
                            </div>
                        </div>
                    </div>
                    <div className={css.product__links}>
                        <a href="#">Смотреть все джинсы</a>
                        <a href="#">Смотреть все товары бренда</a>
                        <a href="#">Смотреть все товары для мужчин</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
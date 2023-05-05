"use client";
import React, { useRef, useState } from "react";
import css from './Form-style.module.css';
import Image from "next/image";
import jacket from '../../../public/form/jacket.png';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import { FreeMode, Thumbs } from "swiper";

const Form = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className={css.form}>
            <div className={css.container}>
                <div className={css.form__slider}>
                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Thumbs]}
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
                        modules={[FreeMode, Thumbs]}
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
                <div className={css.form__info}>
                  <h1>ОБРАЗ В ДЕТАЛЯХ</h1>
                  <div className={css.form__card_wrapper}>
                        <div className={css.form__card}>
                          <Image className={css.jacket} src={jacket} alt="jacket" />
                          <div className={css.card__title}>
                            <h4>
                              Жилет с капюшоном и наполнителем из пуха Cortigiani
                            </h4>
                            <div className={css.card__sizes}>
                              <button>50</button>
                              <button>52</button>
                              <button>54</button>
                              <button>56</button>
                            </div>
                          </div>
                            <div className={css.card__prices}>
                              <span>123 000 ₽</span>
                              <span>96 000 ₽</span>
                            </div>
                            <button className={css.card__button}>
                              КУПИТЬ
                            </button>
                        </div>
                        <div className={css.form__card}>
                          <Image className={css.jacket} src={jacket} alt="jacket" />
                          <div className={css.card__title}>
                            <h4>
                              Жилет с капюшоном и наполнителем из пуха Cortigiani
                            </h4>
                            <div className={css.card__sizes}>
                              <button>50</button>
                              <button>52</button>
                              <button>54</button>
                              <button>56</button>
                            </div>
                          </div>
                            <div className={css.card__prices}>
                              <span>123 000 ₽</span>
                              <span>96 000 ₽</span>
                            </div>
                            <button className={css.card__button}>
                              КУПИТЬ
                            </button>
                        </div>
                        <div className={css.form__card}>
                          <Image className={css.jacket} src={jacket} alt="jacket" />
                          <div className={css.card__title}>
                            <h4>
                              Жилет с капюшоном и наполнителем из пуха Cortigiani
                            </h4>
                            <div className={css.card__sizes}>
                              <button>50</button>
                              <button>52</button>
                              <button>54</button>
                              <button>56</button>
                            </div>
                          </div>
                            <div className={css.card__prices}>
                              <span>123 000 ₽</span>
                              <span>96 000 ₽</span>
                            </div>
                            <button className={css.card__button}>
                              КУПИТЬ
                            </button>
                        </div>
                        <div className={css.form__card}>
                          <Image className={css.jacket} src={jacket} alt="jacket" />
                          <div className={css.card__title}>
                            <h4>
                              Жилет с капюшоном и наполнителем из пуха Cortigiani
                            </h4>
                            <div className={css.card__sizes}>
                              <button>50</button>
                              <button>52</button>
                              <button>54</button>
                              <button>56</button>
                            </div>
                          </div>
                            <div className={css.card__prices}>
                              <span>123 000 ₽</span>
                              <span>96 000 ₽</span>
                            </div>
                            <button className={css.card__button}>
                              КУПИТЬ
                            </button>
                        </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
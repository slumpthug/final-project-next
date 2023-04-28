import React from 'react';
import css from './Collection-style.module.css';
import Image from 'next/image';
import MainButton from '../main-button/MainButton';
import man from '../../../public/collection/man.jpg';

const Collection = () => {
    return (
        <div className={css.collection}>
            <div className={css.container}>
                <h1>КОЛЛЕКЦИЯ</h1>
                <div className={css.collection__wrapper}>
                    <div className={css.collection__card}>
                        <Image className={css.man} src={man} alt="" />
                        <p>Спортивный костюм Artigiani, футболка Artigiani, кеды Santoni</p>
                    </div>
                    <div className={css.collection__card}>
                        <Image className={css.man} src={man} alt="" />
                        <p>Пуховый жилет Kiton, джинсы Jacob Cohen, футболка Fedeli, кроссовки Valentino, бейсболка Kiton</p>
                    </div>
                    <div className={css.collection__card}>
                        <Image className={css.man} src={man} alt="" />
                        <p>Парка Artigiani, джемпер Artigiani,джинсы Jacob Cohen, челси Santoni</p>
                    </div>
                </div>
                <MainButton text="смотреть больше" />
            </div>
        </div>
    );
};

export default Collection;
import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Basketcomp from '../basketcomp/Basketcomp';

const Basket = () => {
    return (
        <div className='basket'>
            <Header/>
            <Basketcomp/>
            <Footer/>
        </div>
    );
};

export default Basket;
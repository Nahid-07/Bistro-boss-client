import React from 'react';
import Banner from '../Banner/Banner';
import CategorySlider from '../categorySlider/CategorySlider';

const Home = () => {
    return (
        <div className=''>
            <div>
            <Banner></Banner>
            </div>
            <section className='max-w-7xl mx-auto'>
                <CategorySlider></CategorySlider>
            </section>
        </div>
    );
};

export default Home;
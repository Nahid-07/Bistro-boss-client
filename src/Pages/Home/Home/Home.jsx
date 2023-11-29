import React from 'react';
import Banner from '../Banner/Banner';
import CategorySlider from '../categorySlider/CategorySlider';
import FeaturedSection from '../featuredection/FeaturedSection';

const Home = () => {
    return (
        <div className=''>
            <div>
            <Banner></Banner>
            </div>
            <section className='max-w-7xl mx-auto'>
                <CategorySlider></CategorySlider>
                <FeaturedSection></FeaturedSection>
            </section>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../Banner/Banner';
import CategorySlider from '../categorySlider/CategorySlider';
import FeaturedSection from '../featuredection/FeaturedSection';
import MenuSection from '../menuSection/MenuSection';
import CallUs from '../callus/CallUs';

const Home = () => {
    return (
        <main className=''>
            <div>
            <Banner></Banner>
            </div>
            <section className='max-w-7xl mx-auto'>
                <CategorySlider></CategorySlider>
                <FeaturedSection></FeaturedSection>
                <MenuSection></MenuSection>
                <CallUs></CallUs>
            </section>
        </main>
    );
};

export default Home;
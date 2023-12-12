import React from 'react';
import Banner from '../Banner/Banner';
import CategorySlider from '../categorySlider/CategorySlider';
import FeaturedSection from '../featuredection/FeaturedSection';
import MenuSection from '../menuSection/MenuSection';
import CallUs from '../callus/CallUs';
import ChefRecoomendSection from '../ChefRecommendSection/ChefRecoomendSection';
import FeaturedBanner from '../featuredBanner/FeaturedBanner';
import Review from '../review/Review';

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
                <ChefRecoomendSection></ChefRecoomendSection>
            </section>
            <section>
                <FeaturedBanner></FeaturedBanner>
            </section>
            <section className='max-w-7xl mx-auto'>
                <Review></Review>
            </section>
        </main>
    );
};

export default Home;
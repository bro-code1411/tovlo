import React from 'react'
import Hero from '../componenets/Hero';
import { Banner } from '../componenets/Banner';
import { Link } from 'react-router-dom';
import Services from '../componenets/Services';
import FeaturedTrips from '../componenets/FeaturedTrips';

const Home = () => {
    return (
        <>
        <Hero >
            <Banner title="Tovlo" subtitle="The trip you need" >
            <Link to ="/trips" className="btn-primary">
                Trips
            </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedTrips/>
        </>
    )
}
export default Home;
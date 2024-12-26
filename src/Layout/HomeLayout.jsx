import React from 'react';
import Banner from '../Components/Banner';
import SixMarathon from '../Components/SixMarathon';
import Upcoming from '../Components/Upcoming';
import Benefit from '../Components/Benefit';
import Review from '../Components/Review';
import { Helmet } from 'react-helmet';

const HomeLayout = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Benefit></Benefit>
            <SixMarathon></SixMarathon>
            <Upcoming></Upcoming>
            <Review></Review>
        </div>
    );
};

export default HomeLayout;
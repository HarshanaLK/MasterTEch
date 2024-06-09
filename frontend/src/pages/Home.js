import React from 'react';
import ProDivC from '../Elements/ProDivC';
import ProductsC from '../Elements/ProductsC';
import { Helmet } from 'react-helmet';
import Slide from '../Elements/Slide';



    const Home = () => {
        return (
            <>
                <Helmet>
                    <title>MasterTech</title>
                </Helmet>
                <div>
                    <Slide />
                    <ProDivC />
                    <ProductsC />
                </div>
            </>
        );
    };

    export default Home;

import React,{} from 'react'
import Slide from '../Elements/Slide'
import DisCard from '../Elements/DisCard'
import ProDivC from '../Elements/ProDivC'
import ProductsC from '../Elements/ProductsC'
import { Helmet } from 'react-helmet';



const Home = () => {
 
    return (
        <>
        <Helmet>
            <title>MasterTech</title>
        </Helmet>
             <div>
                <Slide/>
                 <div className="cards">
                         <DisCard title='Dekstop'/>
                         <DisCard title='Laptop'/>
                         <DisCard title='Accessories'/>                
                 </div>
                <ProDivC/>
                <ProductsC/>
        </div>
        </>
    )
}

export default Home

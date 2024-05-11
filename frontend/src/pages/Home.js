import React,{} from 'react'
import Slide from '../components/Slide'
import DisCard from '../components/DisCard'
import ProDivC from '../components/ProDivC'
import ProductsC from '../components/ProductsC'
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

import React from 'react'
import { Link } from 'react-router-dom'

const DisCard = ({title}) => {
    return (

        <div className="cardscg">
            <h1>{title}</h1>
            <Link to ={`/Shop/?cg=${title}`} className="ShopNowcg">Buy Now</Link>
        </div>
    )
}

export default DisCard

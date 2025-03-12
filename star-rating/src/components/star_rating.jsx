import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import './star_rating.css';
const Star_rating = ({
    noOfStars = 10
}) => {
    const [rating, setRating] = useState(0);
    const [hover , SetHover] = useState(0);

    const handelClick =(i)=>{
        setRating(i);
    }
    const handelMouseMove =(i)=>{
        SetHover(i)
    }
    const handelMouseLeave = (i)=>{
        SetHover(rating)
    }
    return (
        <div className="StarRating">
            {
                [...Array(noOfStars)].map((_, index) => {
                    index+=1;
                    return (
                        <FaStar
                            key={index}
                            className={index <= (hover || rating)? 'active' : 'inactive'}
                            onClick={()=> handelClick(index)}
                            onMouseMove={ ()=>handelMouseMove(index)}
                            onMouseLeave={ ()=> handelMouseLeave(index)}
                        />)
                })
            }
        </div>
    )
}

export default Star_rating

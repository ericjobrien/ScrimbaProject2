import React from 'react';
import kaitie from '../images/katie.jpg';
import star from '../images/star-xxl.png';

export default function Card(props) {

    let badgeText;
    if(props.event.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.event.location === "Online") {
        badgeText = "ONLINE"
    }

    
    return (

        
        <div className='card'>
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img className='card--image' src={kaitie} alt="Kaite Zaferes at Olympics" />
            <div className='card--stats'>
                <img className='card--star' src={star} alt="red star" />
                <span>{props.event.stats.rating}</span>
                <span className='gray'>({props.event.stats.reviewCount}) - </span>
                <span className='gray'>{props.event.location}</span>
            </div>
            <p className='card--title'>{props.event.title}</p>
            <p className='card--price'><span className='bold'>From ${props.event.price}</span>/person</p>
        </div>
    )
}
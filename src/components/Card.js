import { ReactDOM } from "react";
import star from '../images/Star1.png'

export default function Card(props){
    let badgeText;
    if(props.openSpots === 0){
        badgeText="SOLD OUT"
    }else if(props.location==="Online"){
        badgeText="Online"
    }
    return(
        <div className="card ml-5">
             {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.coverImg} alt="person " className="card--image"></img>
            <div className="card-star">
                <span><img src={star} alt="star" className="card--star"></img></span>
                <span className="gray">{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) •</span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title mb-0">{props.title} {props.name}</p>
            <p className="card--price pt-0 bold"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
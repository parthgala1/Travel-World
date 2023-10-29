import { useState } from 'react'

export default function Card(props){
    return(
        <>
        <div className = "card">
            <img src = {`../assets/${props.img}`} className="card-photo" />
            <div className="card-details">
                <img src = "../assets/map.png" className="card-pointer" />
                <span className="card-name ">{props.country}</span>
                <a href={`${props.map}`}>View on Google Maps</a>
                <h1 classNmae="card-title">{props.title}</h1>
                <h4>{props.date}</h4>
                <p>{props.data}</p>
            </div>
            
        </div>
        <hr />
        </>
    )
}

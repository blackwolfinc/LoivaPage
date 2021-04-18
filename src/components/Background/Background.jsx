import React from 'react'
import "./Back.scss"
import back from "../../assets/images/logos/download.png"
import back2 from "../../assets/images/logos/background.png"
export const Background = () => {
    return (
        <div className="BackgroundMain">
            <img src={back}/>
            <img className="back2" src={back2}/>
        </div>
    )
}

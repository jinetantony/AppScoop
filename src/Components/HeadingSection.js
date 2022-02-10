import React from 'react'
import shoppifyAward from '../Assets/shoppify-award.png';

export function HeadingSection() {
    return (
        <div className="header" style={{backgroungImage : `url(../Assets/best-movies.jpg)`}} fluid>
            <div className="ShoppifyImg">
                <img src={shoppifyAward} id="ShoppifyImg"></img>
            </div>
            <div className="mainText">
                <div className="headerText">
                    <h1 >The<br />Shoppies</h1>
                    <h2 >Search Below To Nominate Your Top <span className='fiveInRed'>5</span>  Favorite Movies!</h2>
                </div>
            </div>
        </div>
    )
}